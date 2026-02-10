# Quick Reference Guide - iFix Website

## 🔍 How to Find and Change Common Elements

### Phone Number Changes
**Search for:** `+919043322123` or `9043322123`
**Found in:** Multiple places in index.html
**Replace all instances** with your new number

Example locations:
- Line ~40: Navigation call button
- Line ~70: Hero section call button  
- Line ~75: WhatsApp button
- Line ~500: Contact section
- Line ~550: Footer
- In script.js: WhatsApp form handler

---

### Email Address
**Search for:** `info@akshayrajtech.com`
**Found in:** index.html (2-3 places)
**Direct replace** - no formatting needed

---

### Business Hours
**Search for:** `10:00 AM - 8:00 PM` or `10:00AM to 8:00PM`
**Found in:** 
- Hero section
- Contact section  
**Replace with:** Your actual hours

---

### Address
**Search for:** `#30, 1st Floor, G.S.T Road`
**Found in:** Contact section and Footer
**Replace entire address block**

---

### Add/Remove Service Areas
**Find section:** `<section id="areas" class="service-areas">`
**Look for:** `<ul class="areas-list">`
**Add new area:** 
```html
<li>New Area Name</li>
```

---

### Change Service Descriptions
**Find section:** `<section id="services" class="services">`
**Each service has:**
```html
<div class="service-card">
    <div class="service-icon">EMOJI</div>
    <h3 class="service-title">SERVICE NAME</h3>
    <p class="service-description">DESCRIPTION</p>
    <ul class="service-list">
        <li>Point 1</li>
        <li>Point 2</li>
    </ul>
</div>
```
Modify the text directly.

---

### Update Statistics (Happy Customers, Years, etc.)
**Find section:** `<div class="about-stats">`
**Change numbers in:**
```html
<div class="stat-number">YOUR NUMBER</div>
<div class="stat-label">YOUR LABEL</div>
```

---

### Google Map
**Find:** `<div class="map-container">`
**Get new embed code from:**
1. Go to Google Maps
2. Search your location
3. Click Share → Embed a map
4. Copy iframe code
5. Replace existing iframe

---

## 🎨 Color Changes (styles.css)

**Find:** `:root {` at the top of styles.css

**Primary Blue:**
```css
--primary-color: #2563eb;
```
Change to your brand color

**Secondary Green:**
```css
--secondary-color: #10b981;
```

**WhatsApp Green:**
```css
--whatsapp-green: #25d366;
```
(Don't change this - it's the official WhatsApp color)

---

## 🖼️ Image Updates

### Replace Images:
Just upload new images with **SAME FILENAMES**:
- `logo.png` - Your logo
- `akshayraj-tech-tambaram.jpg` - Hero background
- `akshayraj2.jpg` - About section image
- And so on...

### OR Change Image Paths in HTML:
**Search for:** `src="image/filename.jpg"`
**Replace with:** `src="image/your-new-image.jpg"`

---

## 📱 Testing Checklist

After making changes:
1. ✅ Open website on phone
2. ✅ Click call button - does it dial?
3. ✅ Click WhatsApp button - does it open WhatsApp?
4. ✅ Fill contact form - does it work?
5. ✅ Check all sections appear correctly
6. ✅ Test on different browsers (Chrome, Firefox, Safari)

---

## 🚨 Common Mistakes to Avoid

❌ **DON'T** delete closing tags like `</div>` or `</section>`
❌ **DON'T** remove quotes from attributes: `class="service-card"`
❌ **DON'T** break the file structure
✅ **DO** make small changes and test immediately
✅ **DO** keep a backup before major changes
✅ **DO** use a text editor (Notepad++, VS Code, Sublime)

---

## 💾 Backup Instructions

**Before editing:**
1. Download current index.html
2. Save as `index-backup-DATE.html`
3. Make changes to original
4. Test
5. If broken, restore backup

---

## 🎯 Most Common Edits (90% of updates)

1. **Update phone number** (when getting new SIM)
2. **Change business hours** (festival/holiday timing)
3. **Add new service area** (expanding coverage)
4. **Update prices** (if you add pricing section later)
5. **Change photos** (better quality images)

---

## 🔧 Tools You Need

**For Editing:**
- Text Editor: Notepad++ (Windows) or TextEdit (Mac)
- Or: VS Code (free, recommended)

**For Images:**
- Resize: ILoveIMG.com
- Compress: TinyPNG.com
- Edit: Canva.com (free)

**For Testing:**
- Your phone (most important!)
- Chrome DevTools (F12)
- Multiple browsers

---

## 📞 Emergency Contacts

**If website breaks:**
1. Upload backup file
2. Clear browser cache (Ctrl+Shift+Delete)
3. Contact your hosting support
4. Ask a developer friend

**Hosting Issues:**
- Contact your hosting provider
- Check if server is running
- Check if files are uploaded correctly

---

## ⚡ Speed Tips

**Make website load faster:**
1. Compress all images (TinyPNG.com)
2. Don't use giant hero image (max 500KB)
3. Enable GZIP compression (ask hosting)
4. Use CDN if available (Cloudflare free tier)

---

## 🎓 Learn More

**Want to learn web development?**
- HTML/CSS Basics: FreeCodeCamp.org
- YouTube: Traversy Media, Web Dev Simplified
- Practice: W3Schools.com

---

**Remember:** This is a simple, static website. 99% of the time, you just need to find text and replace it. No complicated coding needed!

---

**Created:** February 2026
**For:** iFix Laptop Service Center
**Purpose:** Easy maintenance reference
