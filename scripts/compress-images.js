#!/usr/bin/env node

/**
 * Image Compression Script
 * 
 * This script compresses images in the public/assets folder
 * Usage: node scripts/compress-images.js
 */

import imagemin from 'imagemin';
import imageminMozjpeg from 'imagemin-mozjpeg';
import imageminPngquant from 'imagemin-pngquant';
import imageminGifsicle from 'imagemin-gifsicle';
import imageminSvgo from 'imagemin-svgo';
import fs from 'fs';
import path from 'path';

const PUBLIC_ASSETS_DIR = './public/assets';

async function compressImages() {
  console.log('🖼️  Starting image compression...');
  
  try {
    // Check if public/assets directory exists
    if (!fs.existsSync(PUBLIC_ASSETS_DIR)) {
      console.log('❌ Public assets directory not found. Run this after moving images to public/assets/');
      return;
    }

    // Get all image files
    const files = await imagemin([`${PUBLIC_ASSETS_DIR}/**/*.{jpg,jpeg,png,gif,svg}`], {
      destination: PUBLIC_ASSETS_DIR,
      plugins: [
        // JPEG optimization
        imageminMozjpeg({
          quality: 80,
          progressive: true
        }),
        
        // PNG optimization
        imageminPngquant({
          quality: [0.65, 0.8],
          speed: 4
        }),
        
        // GIF optimization
        imageminGifsicle({
          optimizationLevel: 3
        }),
        
        // SVG optimization
        imageminSvgo({
          plugins: [
            {
              name: 'preset-default',
              params: {
                overrides: {
                  removeViewBox: false
                }
              }
            }
          ]
        })
      ]
    });

    console.log(`✅ Compressed ${files.length} images successfully!`);
    
    // Show size reduction info
    const totalSize = files.reduce((sum, file) => sum + file.data.length, 0);
    console.log(`📊 Total compressed size: ${(totalSize / 1024 / 1024).toFixed(2)} MB`);
    
  } catch (error) {
    console.error('❌ Error compressing images:', error.message);
  }
}

// Run the compression
compressImages(); 