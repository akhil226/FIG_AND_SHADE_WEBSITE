import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const filePath = searchParams.get('path');

  if (!filePath) return new NextResponse('Path required', { status: 400 });
  if (filePath.includes('..')) return new NextResponse('Invalid path', { status: 400 });
  
  const absolutePath = path.join(process.cwd(), filePath);
  
  try {
    const stat = await fs.stat(absolutePath);
    const file = await fs.readFile(absolutePath);

    let contentType = 'application/octet-stream';
    if(filePath.toLowerCase().endsWith('.mp4')) contentType = 'video/mp4';
    else if(filePath.toLowerCase().endsWith('.png')) contentType = 'image/png';
    else if(filePath.toLowerCase().endsWith('.jpg') || filePath.toLowerCase().endsWith('.jpeg')) contentType = 'image/jpeg';
    else if(filePath.toLowerCase().endsWith('.webp')) contentType = 'image/webp';

    return new NextResponse(file, {
      headers: {
        'Content-Type': contentType,
        'Content-Length': stat.size.toString(),
        'Accept-Ranges': 'bytes',
        'Cache-Control': 'public, max-age=31536000, immutable',
      }
    });
  } catch(e) {
    return new NextResponse('File not found: ' + absolutePath, { status: 404 });
  }
}
