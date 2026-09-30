# Standardized Non-Home Page Pattern

To maintain a consistent and premium visual identity across ScaleERP Web, all non-home pages (e.g., Pricing, About, Contact, Case Studies) must adhere to the following structural patterns for their Hero sections, content sections, and Call-to-Action (CTA) sections.

While background gradients, colors, and textures can vary to fit the page's theme, the dimensional classes, typography, padding, and container layout must remain identical.

## 1. Hero Section Blueprint

```tsx
<section className="relative px-4 pt-32 pb-32 w-full bg-zinc-950 dark:bg-zinc-50 text-white dark:text-zinc-900 rounded-b-[3rem] sm:rounded-b-[4rem] overflow-hidden shadow-2xl transition-colors duration-500">
  
  {/* Optional Background Textures/Gradients */}
  <div className="absolute inset-0 ... pointer-events-none" />
  
  <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 max-w-7xl mx-auto">
    
    {/* Left Text Content */}
    <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left space-y-8">
      
      <BlurIn>
        {/* Optional Badge Component */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full ...">
          Badge Text
        </div>
      </BlurIn>
      
      <BlurIn delay={0.2}>
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight">
          Page Title
        </h1>
      </BlurIn>
      
      <BlurIn delay={0.4}>
        <p className="max-w-2xl text-xl sm:text-2xl font-medium leading-relaxed text-zinc-400 dark:text-zinc-600">
          Page Subtitle/Description
        </p>
      </BlurIn>
      
      <BlurIn delay={0.6}>
        {/* Optional CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
          <Button size="lg" className="h-14 px-8 text-base ...">Primary Action</Button>
        </div>
      </BlurIn>
    </div>

    {/* Right Visual Component */}
    <BlurIn delay={0.6} className="w-full lg:w-[450px] shrink-0 relative">
      {/* Cards, Mockups, or Images go here */}
      <div className="relative bg-[YOUR_CARD_BG] backdrop-blur-2xl border border-[YOUR_BORDER] rounded-3xl p-8 shadow-2xl overflow-hidden group hover:-translate-y-1 transition-transform duration-500">
          ...
      </div>
    </BlurIn>

  </div>
</section>
```

### Hero Section Constraints
1. **Section Wrapper:** Must have `pt-32 pb-32`, `rounded-b-[3rem] sm:rounded-b-[4rem]`, and `shadow-2xl`.
2. **Main Container:** Must be `max-w-7xl mx-auto` utilizing a `flex-col lg:flex-row items-center justify-between gap-12` layout.
3. **Text Stack:** Must use `space-y-8`.
4. **H1:** Must be `text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight`.
5. **Subtitle (p):** Must be `max-w-2xl text-xl sm:text-2xl font-medium leading-relaxed`.
6. **Right Component Wrapper:** Must have a constrained width of `w-full lg:w-[450px] shrink-0 relative` to maintain a consistent text-to-visual ratio across pages.


## 2. Standard Content Grid / Strip Pattern

Sections immediately following the hero (like grids, features, FAQ, or any standard content) must maintain identical top/bottom padding and utilize the "Strip" background pattern to give a contained, boxed feel. They must also have a standard H2 headline inside a `mb-12` container.

```tsx
<section className="px-4 py-24 mx-auto w-full max-w-7xl lg:px-8 bg-zinc-50 dark:bg-zinc-900 border-y border-zinc-200 dark:border-zinc-800 transition-colors duration-500">
  <div className="mb-12">
    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-zinc-900 dark:text-zinc-100">
      {t("your_translation_key", "Your Section Headline")}
    </h2>
  </div>
  
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 relative z-20">
    {/* Cards or Content */}
  </div>
</section>
```

### Content Strip Constraints
1. **Strip Wrapper:** Must use `px-4 py-24 mx-auto w-full max-w-7xl lg:px-8` to ensure it spans up to 7xl and provides ample vertical spacing.
2. **Strip Styling:** Must include `bg-zinc-50 dark:bg-zinc-900 border-y border-zinc-200 dark:border-zinc-800 transition-colors duration-500` to create the cohesive background strip.
3. **Section Headline:** Must be wrapped in `<div className="mb-12">`.
4. **H2 Styling:** Must be `text-3xl font-bold tracking-tight sm:text-4xl text-zinc-900 dark:text-zinc-100`.


## 3. Closing Call-to-Action (CTA) Pattern

The final CTA on every page must match the padding and strip aesthetic of the content grids, but centered with a narrower container.

```tsx
<section className="px-4 py-32 mx-auto w-full max-w-4xl text-center lg:px-8 bg-zinc-50 dark:bg-zinc-900 border-y border-zinc-200 dark:border-zinc-800 transition-colors duration-500 my-16">
  <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-zinc-900 dark:text-zinc-50 mb-6">
    {t("your_cta_headline")}
  </h2>
  <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-10 max-w-2xl mx-auto">
    {t("your_cta_copy")}
  </p>
  <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
    {/* Buttons */}
  </div>
</section>
```

### CTA Constraints
1. **CTA Wrapper:** Must use `px-4 py-32 mx-auto w-full max-w-4xl text-center lg:px-8`.
2. **Strip Styling:** Must have `bg-zinc-50 dark:bg-zinc-900 border-y border-zinc-200 dark:border-zinc-800 transition-colors duration-500 my-16` to apply the background strip with top and bottom spacing.
3. **CTA H2:** Must use `text-3xl font-extrabold tracking-tight sm:text-4xl text-zinc-900 dark:text-zinc-50 mb-6`.
4. **CTA Subtitle:** Must use `text-lg text-zinc-600 dark:text-zinc-400 mb-10 max-w-2xl mx-auto`.
