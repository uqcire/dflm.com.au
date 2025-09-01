#!/usr/bin/env node

/**
 * Simple Image Compression Script using Sharp
 * 
 * This script compresses images in the public/assets folder using Sharp
 * Usage: node scripts/simple-compress.js
 */

import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

const PUBLIC_ASSETS_DIR = './public/assets';

async function compressImages() {
  console.log('🖼️  Starting image compression with Sharp...');
  
  try {
    // Check if public/assets directory exists
    if (!fs.existsSync(PUBLIC_ASSETS_DIR)) {
      console.log('❌ Public assets directory not found. Run this after moving images to public/assets/');
      return;
    }

    // Find all image files
    const imageFiles = await glob(`${PUBLIC_ASSETS_DIR}/**/*.{jpg,jpeg,png}`);
    
    if (imageFiles.length === 0) {
      console.log('ℹ️  No image files found to compress');
      return;
    }

    console.log(`📁 Found ${imageFiles.length} images to compress...`);

    let totalOriginalSize = 0;
    let totalCompressedSize = 0;

    for (const filePath of imageFiles) {
      try {
        const originalStats = fs.statSync(filePath);
        totalOriginalSize += originalStats.size;

        const ext = path.extname(filePath).toLowerCase();
        const outputPath = filePath;

        if (ext === '.jpg' || ext === '.jpeg') {
          await sharp(filePath)
            .jpeg({ quality: 80, progressive: true })
            .toFile(outputPath + '.tmp');
        } else if (ext === '.png') {
          await sharp(filePath)
            .png({ quality: 80, compressionLevel: 9 })
            .toFile(outputPath + '.tmp');
        }

        // Replace original with compressed version
        fs.unlinkSync(filePath);
        fs.renameSync(outputPath + '.tmp', outputPath);

        const compressedStats = fs.statSync(filePath);
        totalCompressedSize += compressedStats.size;

        const reduction = ((originalStats.size - compressedStats.size) / originalStats.size * 100).toFixed(1);
        console.log(`✅ ${path.basename(filePath)}: ${(originalStats.size / 1024).toFixed(1)}KB → ${(compressedStats.size / 1024).toFixed(1)}KB (${reduction}% reduction)`);

      } catch (error) {
        console.log(`⚠️  Skipped ${path.basename(filePath)}: ${error.message}`);
      }
    }

    const totalReduction = ((totalOriginalSize - totalCompressedSize) / totalOriginalSize * 100).toFixed(1);
    console.log(`\n🎉 Compression completed!`);
    console.log(`📊 Total original size: ${(totalOriginalSize / 1024 / 1024).toFixed(2)} MB`);
    console.log(`📊 Total compressed size: ${(totalCompressedSize / 1024 / 1024).toFixed(2)} MB`);
    console.log(`📊 Overall reduction: ${totalReduction}%`);
    
  } catch (error) {
    console.error('❌ Error compressing images:', error.message);
  }
}

// Run the compression
compressImages(); 