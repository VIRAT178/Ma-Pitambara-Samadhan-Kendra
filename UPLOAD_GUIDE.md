# 📱 How to Upload Images & Videos - Step by Step

## Your Setup is Ready! ✅

Your Cloudinary account is configured:
- **Cloud Name:** dwztiut3h ✓
- **Environment Variable:** Already added ✓

---

## 🚀 Quick Start (3 Steps)

### Step 1: Install Package
```bash
npm install next-cloudinary
```

### Step 2: Create Upload Preset
Go to: https://console.cloudinary.com/settings/upload

**Create new upload preset:**
1. Click **Add upload preset**
2. Name: `pandit_gallery`
3. Toggle **Unsigned** ON ✓
4. Folder: `pandit-shubham`
5. Click **Save**

### Step 3: Start Uploading!
```bash
npm run dev
```

Visit: **http://localhost:3000/admin/upload**

---

## 📸 Uploading Your Media

### Method 1: Using Admin Upload Page (Easiest!)

1. **Start your app:**
   ```bash
   npm run dev
   ```

2. **Go to upload page:**
   ```
   http://localhost:3000/admin/upload
   ```

3. **Click the button:**
   ![Upload Button]
   "Click to Upload Images & Videos"

4. **Select from laptop:**
   - Click to select files
   - Or drag & drop
   - Select multiple files
   - Click upload

5. **Wait for upload:**
   - Shows progress
   - Lists files when done

6. **Copy Public IDs:**
   - Click "Copy Public ID" button
   - Use in your gallery pages

### Method 2: Using Cloudinary Dashboard

1. **Go to Cloudinary:**
   ```
   https://console.cloudinary.com/media_library
   ```

2. **Create folder (optional):**
   - Click "+ Folder"
   - Name: `pandit-shubham`

3. **Upload files:**
   - Click "Upload" button
   - Select from laptop
   - Or drag & drop

4. **Find public_id:**
   - Click on file
   - Find "Public ID" field
   - Copy it

---

## 📝 Example: Adding Images to Gallery

### Step 1: Upload image via `/admin/upload`
```
Visit: http://localhost:3000/admin/upload
Upload: my-event-photo.jpg
Copy: public_id (e.g., pandit-shubham/my-event-photo)
```

### Step 2: Update gallery page
```tsx
// app/[locale]/gallery/page.tsx

import CloudinaryGalleryGrid from '../../../components/CloudinaryGalleryGrid'

const galleryItems = [
  {
    id: '1',
    public_id: 'pandit-shubham/my-event-photo', // <- Paste here
    alt: 'My event photo',
    title: 'Event Photo',
    type: 'image' as const,
  },
]

export default function GalleryPage() {
  return <CloudinaryGalleryGrid items={galleryItems} title="Gallery" />
}
```

### Step 3: View in browser
```
http://localhost:3000/gallery
```

Done! 🎉

---

## 🎥 Example: Adding Videos

### Step 1: Upload video via `/admin/upload`
```
Visit: http://localhost:3000/admin/upload
Upload: testimonial-video.mp4
Copy: public_id (e.g., pandit-shubham/testimonial-video)
```

### Step 2: Update gallery page
```tsx
// Same as images, but type: 'video'

const galleryItems = [
  {
    id: '1',
    public_id: 'pandit-shubham/testimonial-video', // <- Video path
    alt: 'Client testimonial',
    title: 'Testimonial Video',
    type: 'video' as const, // <- Important: type is 'video'
  },
]
```

### Step 3: View in browser
```
http://localhost:3000/gallery
Click on video to play
```

Done! 🎉

---

## 📜 Example: Adding Certificates

### Step 1: Upload certificate image
```
Visit: http://localhost:3000/admin/upload
Upload: vedic-cert.jpg
Copy: public_id
```

### Step 2: Update certificates page
```tsx
// app/[locale]/certificates/page.tsx

import CloudinaryCertificateGallery from '../../../components/CloudinaryCertificateGallery'

const certificates = [
  {
    id: '1',
    public_id: 'pandit-shubham/vedic-cert', // <- Paste here
    alt: 'Vedic Astrology Certificate',
    title: 'Vedic Astrology Certification',
    issuer: 'International Institute',
    year: '2015',
  },
]

export default function CertificatesPage() {
  return (
    <CloudinaryCertificateGallery 
      certificates={certificates} 
      title="Certifications" 
    />
  )
}
```

### Step 3: View in browser
```
http://localhost:3000/certificates
```

Done! 🎉

---

## 🗂️ File Organization Tips

### Structure your uploads:
```
pandit-shubham/
├── gallery/
│   ├── event-1.jpg
│   ├── event-2.jpg
│   ├── consultation.jpg
│   └── service-demo.jpg
├── certificates/
│   ├── vedic-astrology.jpg
│   ├── numerology.jpg
│   ├── palm-reading.jpg
│   └── life-coaching.jpg
└── testimonials/
    ├── video-1.mp4
    ├── video-2.mp4
    └── voice-message.mp3
```

Then use public IDs like:
```
pandit-shubham/gallery/event-1
pandit-shubham/certificates/vedic-astrology
pandit-shubham/testimonials/video-1
```

---

## 📊 What Gets Auto-Optimized?

Cloudinary automatically:
- ✅ Converts images to WebP
- ✅ Compresses images
- ✅ Adjusts quality for device
- ✅ Transcodes videos
- ✅ Serves from fast CDN
- ✅ Handles responsive images

**You don't need to compress anymore!**

---

## 🔍 Finding Your Public ID

### After upload via admin page:
```
Click "Copy Public ID" button
Paste in your code
Example: pandit-shubham/my-photo
```

### After upload via dashboard:
1. Go to: https://console.cloudinary.com/media_library
2. Click on image/video
3. Find "Public ID" field
4. Copy and paste

### From URL:
If URL is: `https://res.cloudinary.com/dwztiut3h/image/upload/v123/pandit-shubham/photo.jpg`

Public ID is: `pandit-shubham/photo`

---

## ⚠️ Common Issues & Solutions

### Issue: Upload button not working

**Solution:**
1. Did you create "pandit_gallery" preset?
2. Is it set to "Unsigned"?
3. Reload browser
4. Check browser console (F12) for errors

### Issue: Images not showing after upload

**Solution:**
1. Check public_id is exactly right (case-sensitive)
2. Verify file exists in Cloudinary dashboard
3. Check .env.local has `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=dwztiut3h`
4. Restart app: `npm run dev`

### Issue: Videos not playing

**Solution:**
1. Ensure format is MP4
2. Check file size (under 50MB)
3. Try MP4 format first
4. Test in Chrome

### Issue: Page not loading

**Solution:**
1. Did you run `npm install next-cloudinary`?
2. Did you restart `npm run dev`?
3. Check `.env.local` file exists

---

## 📋 Complete Checklist

- [ ] Cloud Name added to .env.local (✓ already done)
- [ ] Ran `npm install next-cloudinary`
- [ ] Created "pandit_gallery" upload preset
- [ ] Visited `/admin/upload` page
- [ ] Uploaded at least one image
- [ ] Copied public_id
- [ ] Updated gallery/page.tsx with public_id
- [ ] Viewed gallery at `/gallery` route
- [ ] Works in browser!

---

## 🎯 Next: Update Other Pages

After uploading images, update these files:

1. **[app/[locale]/gallery/page.tsx](../app/[locale]/gallery/page.tsx)**
   - Add your image/video public IDs
   - Update titles and descriptions

2. **[app/[locale]/certificates/page.tsx](../app/[locale]/certificates/page.tsx)**
   - Add your certificate public IDs
   - Update issuer and year info

3. **Test in browser:**
   ```bash
   npm run dev
   ```

4. **Deploy when ready:**
   ```bash
   npm run build
   npm run start
   ```

---

## 💡 Pro Tips

1. **Organize files in Cloudinary:**
   - Create folders (gallery, certificates, etc.)
   - Use consistent naming
   - Makes finding public_ids easier

2. **Batch upload:**
   - Upload multiple files at once
   - Faster than one at a time
   - Admin page supports this

3. **Test responsive:**
   - Upload once, used everywhere
   - Cloudinary serves correct size for device
   - No need different versions

4. **Monitor usage:**
   - Dashboard shows storage used
   - Free tier: 10GB
   - Check: https://console.cloudinary.com

---

## 📞 Support

- **Cloudinary Docs:** https://cloudinary.com/documentation
- **next-cloudinary Docs:** https://next.cloudinary.dev
- **Console/Errors:** https://console.cloudinary.com/errors
- **Cloudinary Support:** https://support.cloudinary.com

---

## ✅ You're All Set!

Your website is ready to display beautiful galleries and certificates with:
- ✅ Fast loading (optimized images/videos)
- ✅ Global CDN (served from worldwide servers)
- ✅ Auto-optimization (quality adjusted per device)
- ✅ Easy management (upload anytime)

**Start uploading:** http://localhost:3000/admin/upload

Happy uploading! 🚀
