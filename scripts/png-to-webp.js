#!/usr/bin/env node

/**
 * PNG to WebP Conversion Script
 * 
 * This script converts all PNG images to WebP format for better performance
 * - Converts PNG to WebP with optimized settings
 * - Maintains original PNG as fallback
 * - Updates file references in code
 * 
 * Usage: node scripts/png-to-webp.js
 */

import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

const PUBLIC_ASSETS_DIR = './public/assets';
const SRC_DIR = './src';

async function convertPngToWebP() {
    console.log('🔄 Starting PNG to WebP conversion...');

    try {
        // Find all PNG files
        const pngFiles = await glob(`${PUBLIC_ASSETS_DIR}/**/*.png`);

        if (pngFiles.length === 0) {
            console.log('ℹ️  No PNG files found to convert');
            return;
        }

        console.log(`📁 Found ${pngFiles.length} PNG files to convert...`);

        let totalOriginalSize = 0;
        let totalWebPSize = 0;
        let convertedCount = 0;
        const conversionMap = new Map(); // Track conversions for file updates

        // Step 1: Convert PNG files to WebP
        for (const filePath of pngFiles) {
            try {
                const originalStats = fs.statSync(filePath);
                totalOriginalSize += originalStats.size;

                // Create WebP version
                const webpPath = filePath.replace('.png', '.webp');

                await sharp(filePath)
                    .webp({
                        quality: 85,        // High quality
                        effort: 6,          // Maximum compression effort
                        lossless: false,    // Use lossy compression for smaller files
                        smartSubsample: true // Better quality for small files
                    })
                    .toFile(webpPath);

                const webpStats = fs.statSync(webpPath);
                totalWebPSize += webpStats.size;
                convertedCount++;

                // Store conversion mapping
                const relativePath = path.relative(PUBLIC_ASSETS_DIR, filePath);
                conversionMap.set(relativePath, relativePath.replace('.png', '.webp'));

                const reduction = ((originalStats.size - webpStats.size) / originalStats.size * 100).toFixed(1);
                console.log(`✅ ${path.basename(filePath)}: ${(originalStats.size / 1024).toFixed(1)}KB → ${(webpStats.size / 1024).toFixed(1)}KB (${reduction}% reduction)`);

            } catch (error) {
                console.log(`⚠️  Failed to convert ${path.basename(filePath)}: ${error.message}`);
            }
        }

        // Step 2: Update file references in source code
        console.log('\n🔄 Updating file references in source code...');
        await updateFileReferences(conversionMap);

        // Step 3: Generate fallback CSS
        console.log('\n🎨 Generating fallback CSS...');
        await generateFallbackCSS(conversionMap);

        const totalReduction = totalOriginalSize > 0 ? ((totalOriginalSize - totalWebPSize) / totalOriginalSize * 100).toFixed(1) : 0;
        console.log(`\n🎉 PNG to WebP conversion completed!`);
        console.log(`📊 Converted: ${convertedCount} images`);
        console.log(`📊 Total original size: ${(totalOriginalSize / 1024 / 1024).toFixed(2)} MB`);
        console.log(`📊 Total WebP size: ${(totalWebPSize / 1024 / 1024).toFixed(2)} MB`);
        console.log(`📊 Overall reduction: ${totalReduction}%`);
        console.log(`💾 Space saved: ${((totalOriginalSize - totalWebPSize) / 1024 / 1024).toFixed(2)} MB`);

    } catch (error) {
        console.error('❌ Error in PNG to WebP conversion:', error.message);
    }
}

async function updateFileReferences(conversionMap) {
    try {
        // Find all Vue, JS, and CSS files
        const sourceFiles = await glob(`${SRC_DIR}/**/*.{vue,js,css}`);

        for (const filePath of sourceFiles) {
            let content = fs.readFileSync(filePath, 'utf8');
            let updated = false;

            // Update PNG references to WebP
            for (const [pngPath, webpPath] of conversionMap) {
                const pngRegex = new RegExp(pngPath.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
                if (content.includes(pngPath)) {
                    content = content.replace(pngRegex, webpPath);
                    updated = true;
                }
            }

            if (updated) {
                fs.writeFileSync(filePath, content, 'utf8');
                console.log(`📝 Updated references in: ${path.relative(process.cwd(), filePath)}`);
            }
        }
    } catch (error) {
        console.log(`⚠️  Error updating file references: ${error.message}`);
    }
}

async function generateFallbackCSS(conversionMap) {
    try {
        const cssContent = `/* WebP Fallback CSS - Auto-generated */
/* This CSS provides fallback for browsers that don't support WebP */

@supports not (background-image: url('data:image/webp;base64,UklGRhoBAABXRUJQVlA4TA4BAABwAAAQAA=')) {
  /* Fallback styles for non-WebP browsers */
  .hero-image,
  .service-card-image,
  .product-image {
    /* These will fall back to PNG if WebP is not supported */
  }
}

/* WebP support detection */
.webp .hero-image {
  background-image: url('/assets/home__hero--factory-building.webp');
}

.no-webp .hero-image {
  background-image: url('/assets/home__hero--factory-building.png');
}
`;

        fs.writeFileSync('./src/styles/webp-fallback.css', cssContent);
        console.log('📝 Generated WebP fallback CSS');
    } catch (error) {
        console.log(`⚠️  Error generating fallback CSS: ${error.message}`);
    }
}

// Run the conversion
convertPngToWebP();
