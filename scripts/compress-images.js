#!/usr/bin/env node

/**
 * Image Compression Script using Sharp
 * 
 * This script compresses images in the public/assets folder using Sharp.
 * Only processes images larger than 2MB to optimize performance.
 * 
 * Usage: node scripts/compress-images.js
 * 
 * Features:
 * - Only compresses images > 2MB
 * - Supports JPG, JPEG, and PNG formats
 * - Maintains quality while reducing file size
 * - Provides detailed compression statistics
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
    let processedCount = 0;
    let skippedCount = 0;

    for (const filePath of imageFiles) {
      try {
        const originalStats = fs.statSync(filePath);
        const fileSizeMB = originalStats.size / (1024 * 1024);

        // Only compress images larger than 2MB
        if (fileSizeMB <= 2) {
          console.log(`⏭️  Skipped ${path.basename(filePath)}: ${fileSizeMB.toFixed(2)}MB (≤ 2MB threshold)`);
          skippedCount++;
          continue;
        }

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
        processedCount++;

        const reduction = ((originalStats.size - compressedStats.size) / originalStats.size * 100).toFixed(1);
        console.log(`✅ ${path.basename(filePath)}: ${(originalStats.size / 1024 / 1024).toFixed(2)}MB → ${(compressedStats.size / 1024 / 1024).toFixed(2)}MB (${reduction}% reduction)`);

      } catch (error) {
        console.log(`⚠️  Skipped ${path.basename(filePath)}: ${error.message}`);
      }
    }

    const totalReduction = totalOriginalSize > 0 ? ((totalOriginalSize - totalCompressedSize) / totalOriginalSize * 100).toFixed(1) : 0;
    console.log(`\n🎉 Compression completed!`);
    console.log(`📊 Total images found: ${imageFiles.length}`);
    console.log(`📊 Processed: ${processedCount} images (> 2MB)`);
    console.log(`📊 Skipped: ${skippedCount} images (≤ 2MB)`);
    console.log(`📊 Total original size: ${(totalOriginalSize / 1024 / 1024).toFixed(2)} MB`);
    console.log(`📊 Total compressed size: ${(totalCompressedSize / 1024 / 1024).toFixed(2)} MB`);
    console.log(`📊 Overall reduction: ${totalReduction}%`);
    console.log(`💾 Space saved: ${((totalOriginalSize - totalCompressedSize) / 1024 / 1024).toFixed(2)} MB`);

  } catch (error) {
    console.error('❌ Error compressing images:', error.message);
  }
}

// Run the compression
compressImages(); 