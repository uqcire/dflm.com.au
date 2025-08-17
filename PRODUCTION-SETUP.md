# Production Setup Guide

This guide helps you configure the production environment for `dflm.com.au` to connect to your production Strapi instance.

## 🚨 **Current Issues Fixed**

1. **Social Media Icons**: Fixed asset paths to work in production
2. **API Configuration**: Added production configuration system
3. **Environment Variables**: Created production config structure

## 🔧 **Required Configuration**

### **Step 1: Update Production Strapi URL**

Edit `src/config/production.js` and update the Strapi URL:

```javascript
export const productionConfig = {
  strapi: {
    // Update this to your actual production Strapi URL
    apiUrl: 'https://your-strapi-production-url.com',
    mediaUrl: 'https://your-strapi-production-url.com',
    enabled: true,
  },
  // ... rest of config
};
```

### **Step 2: Deploy Your Strapi to Production**

You need to deploy your Strapi CMS to a production environment. Options include:

- **Render** (recommended - free tier available)
- **Railway**
- **Heroku**
- **DigitalOcean App Platform**
- **AWS/GCP/Azure**

### **Step 3: Configure Strapi Production Environment**

In your production Strapi instance:

1. **Set Environment Variables:**
   ```bash
   DATABASE_URL=your_production_database_url
   JWT_SECRET=your_jwt_secret
   ADMIN_JWT_SECRET=your_admin_jwt_secret
   APP_KEYS=your_app_keys
   API_TOKEN_SALT=your_api_token_salt
   TRANSFER_TOKEN_SALT=your_transfer_token_salt
   ```

2. **Configure Public Permissions:**
   - Go to Strapi Admin → Settings → Users & Permissions Plugin → Roles
   - Click on **Public** role
   - Enable **find** and **findOne** for all content types:
     - Page, Service, Product, Industry, Certification, Partner, Post, Category, Tag

3. **Create Content:**
   - Create site settings (Page single type)
   - Add some sample content for testing

### **Step 4: Update Vercel Environment Variables (Optional)**

If you want to use environment variables instead of the config file:

1. Go to your Vercel project dashboard
2. Navigate to Settings → Environment Variables
3. Add:
   ```
   VITE_STRAPI_API_URL=https://your-strapi-production-url.com
   VITE_STRAPI_MEDIA_URL=https://your-strapi-production-url.com
   VITE_STRAPI_ENABLED=true
   VITE_USE_MOCK_API=false
   ```

## 🚀 **Deployment Steps**

### **1. Build and Deploy Frontend**
```bash
# Build the project
pnpm run build

# Deploy to Vercel (if using Vercel CLI)
vercel --prod
```

### **2. Test the Deployment**
1. Visit `https://dflm.com.au`
2. Check browser console for errors
3. Verify content loads from production Strapi
4. Test social media icons display correctly

## 🔍 **Troubleshooting**

### **Common Issues:**

1. **CORS Errors**: Ensure your production Strapi allows requests from `dflm.com.au`
2. **404 Errors**: Check that content exists in your production Strapi
3. **Permission Errors**: Verify public role permissions are set correctly
4. **Asset Loading**: Ensure all assets are properly built and deployed

### **Debug Steps:**

1. **Check Network Tab**: Look for failed API requests
2. **Check Console**: Look for JavaScript errors
3. **Test API Directly**: Try accessing your Strapi API directly
4. **Verify Environment**: Ensure production config is being used

## 📋 **Checklist**

- [ ] Update `src/config/production.js` with correct Strapi URL
- [ ] Deploy Strapi to production environment
- [ ] Configure Strapi environment variables
- [ ] Set up public permissions in Strapi
- [ ] Create content in production Strapi
- [ ] Build and deploy frontend
- [ ] Test all pages and functionality
- [ ] Verify social media icons display
- [ ] Check API connectivity

## 🎯 **Next Steps**

After successful production deployment:

1. **Content Management**: Start adding real content through Strapi admin
2. **SEO Optimization**: Configure meta tags and structured data
3. **Analytics**: Set up tracking and monitoring
4. **Performance**: Optimize images and loading times
5. **Security**: Review and harden security settings

## 📞 **Support**

If you encounter issues:

1. Check the browser console for specific error messages
2. Verify your Strapi production URL is accessible
3. Ensure all environment variables are set correctly
4. Test API endpoints directly in your browser

---

**Note**: This setup assumes you have a production Strapi instance. If you need help setting up Strapi on Render or another platform, refer to the `RENDER-DEPLOYMENT.md` guide in the CMS folder. 