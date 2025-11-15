import React, { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { Dumbbell, Flame, Salad, Droplets, Moon, Clock, BookOpen, Download, Star, Quote, Sparkles, Leaf, Share2, X } from 'lucide-react'
import Spline from '@splinetool/react-spline'
import jsPDF from 'jspdf'

const container = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const stagger = {
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
}

function SectionTitle({ eyebrow, title, subtitle, onDark = false }) {
  const eyebrowClass = onDark
    ? 'inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-widest bg-white/10 text-white border border-white/10'
    : 'inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-widest bg-neutral-100 text-neutral-800'
  const titleClass = onDark
    ? 'mt-4 text-3xl md:text-4xl font-extrabold tracking-tight text-white'
    : 'mt-4 text-3xl md:text-4xl font-extrabold tracking-tight text-neutral-900'
  const subtitleClass = onDark
    ? 'mt-4 text-white/80 leading-relaxed'
    : 'mt-4 text-neutral-600 leading-relaxed'
  return (
    <div className="max-w-3xl mx-auto text-center mb-10">
      {eyebrow && (
        <span className={eyebrowClass}>
          {eyebrow}
        </span>
      )}
      <h2 className={titleClass}>
        {title}
      </h2>
      {subtitle && (
        <p className={subtitleClass}>
          {subtitle}
        </p>
      )}
    </div>
  )
}

function NeonButton({ children, href = '#', onClick, color = 'blue' }) {
  const base = color === 'green' ? 'from-emerald-500 to-emerald-400 shadow-emerald-500/40' : 'from-sky-500 to-sky-400 shadow-sky-500/40'

  const handleClick = (e) => {
    if (href?.startsWith('#')) {
      e.preventDefault()
      const id = href.slice(1)
      const el = document.getElementById(id)
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    onClick && onClick(e)
  }

  return (
    <a
      href={href}
      onClick={handleClick}
      className={`inline-flex items-center justify-center rounded-full px-6 py-3 font-bold text-white bg-gradient-to-r ${base} transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-lg`}
    >
      {children}
    </a>
  )
}

function Navbar() {
  const navClick = (e) => {
    const href = e.currentTarget.getAttribute('href')
    if (href && href.startsWith('#')) {
      e.preventDefault()
      const id = href.slice(1)
      const el = document.getElementById(id)
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <div className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/50 bg-white/70 dark:bg-neutral-900/60 border-b border-black/5 dark:border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex flex-col leading-tight">
          <a href="#home" onClick={navClick} className="flex items-center gap-2 font-extrabold tracking-tight">
            <span className="relative">
              <span className="absolute inset-0 blur-md bg-gradient-to-r from-sky-500 to-emerald-400 rounded-full opacity-60" />
              <span className="relative inline-flex h-8 w-8 items-center justify-center rounded-full bg-neutral-900 text-white dark:bg-white dark:text-neutral-900">
                HT
              </span>
            </span>
            <span className="text-lg">HealthTrack</span>
          </a>
          {/* Header credit removed as requested */}
        </div>
        <div className="hidden md:flex items-center gap-6 text-sm font-semibold">
          <a href="#about" onClick={navClick} className="hover:text-sky-600">About</a>
          <a href="#plans" onClick={navClick} className="hover:text-sky-600">Plans</a>
          <a href="#diet" onClick={navClick} className="hover:text-sky-600">Diet</a>
          <a href="#tips" onClick={navClick} className="hover:text-sky-600">Tips</a>
          <a href="#resources" onClick={navClick} className="hover:text-sky-600">Resources</a>
          <a href="#testimonials" onClick={navClick} className="hover:text-sky-600">Stories</a>
        </div>
        <div className="hidden md:block">
          <NeonButton href="#plans">Start Free Plan</NeonButton>
        </div>
      </div>
    </div>
  )
}

function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] md:min-h-screen flex items-center overflow-hidden">
      {/* Spline background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/2fSS9b44gtYBt4RI/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        {/* Gradient overlay to improve contrast; must not block interaction */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/70" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-28 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur text-white border border-white/10 mb-5">
            <Sparkles className="h-4 w-4 text-emerald-400" />
            <span className="text-xs tracking-widest">Strong Body. Sharp Mind. Student Life Upgraded.</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-white">
            Get Fit. Stay Sharp.
          </h1>
          <p className="mt-4 text-lg md:text-xl text-neutral-200 max-w-xl">
            Simple, affordable fitness built for Indian students. Train anywhere. Eat smart on a budget. Build discipline that powers your grades and your life.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <NeonButton href="#plans">Start Free Plan</NeonButton>
            <a href="#about" onClick={(e)=>{e.preventDefault();document.getElementById('about')?.scrollIntoView({behavior:'smooth'})}} className="inline-flex items-center justify-center rounded-full px-6 py-3 font-semibold bg-white/10 text-white border border-white/20 hover:bg-white/20 transition-colors">
              Learn More
            </a>
          </div>
          <div className="mt-8 grid grid-cols-3 max-w-sm text-white/80 text-xs">
            <div className="flex items-center gap-2"><Flame className="h-4 w-4 text-sky-400" />Quick routines</div>
            <div className="flex items-center gap-2"><Clock className="h-4 w-4 text-emerald-400" />Student-friendly</div>
            <div className="flex items-center gap-2"><Leaf className="h-4 w-4 text-sky-400" />Budget meals</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="about" className="bg-white text-neutral-900 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="What is HealthTrack"
          title="Fitness for Students — Easy, Affordable, Effective"
          subtitle="HealthTrack is a student-focused platform with minimal-equipment workouts, budget-friendly diet guides, and simple discipline systems that fit perfectly around classes, exams, and campus life across India."
        />
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {[
            { icon: Dumbbell, title: 'Minimal Equipment', desc: 'Train in hostels or small rooms with bodyweight or a single pair of dumbbells.' },
            { icon: Salad, title: 'Budget Nutrition', desc: 'Cook quick, pocket-friendly, protein-rich Indian meals that fuel your brain and body.' },
            { icon: Clock, title: 'Time-Smart', desc: '10–20 minute sessions that fit between lectures and study slots.' },
            { icon: BookOpen, title: 'Discipline Systems', desc: 'Habit trackers and routines that keep you consistent even during exam weeks.' },
          ].map((f, i) => (
            <motion.div key={i} variants={container} className="p-6 rounded-2xl border border-black/5 shadow-sm bg-white hover:shadow-lg transition-shadow">
              <f.icon className="h-6 w-6 text-sky-600" />
              <h3 className="mt-4 font-bold text-lg">{f.title}</h3>
              <p className="mt-2 text-sm text-neutral-600">{f.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function Plans() {
  const plans = useMemo(() => ([
    {
      title: '10-Min Morning Reset',
      desc: 'Wake up, energise, and prime your mind with a fast full-body flow.',
      bullets: ['3 rounds: 30s work / 15s rest', 'Jumping jacks, bodyweight squats, plank', 'No equipment'],
    },
    {
      title: 'Hostel/Home Workout',
      desc: 'Complete routine using only bodyweight or a single pair of dumbbells.',
      bullets: ['Upper/Lower split × 3 days/week', 'Push-ups, hinges, rows, split squats', 'Optional backpack load'],
    },
    {
      title: 'Student Fat-Loss Circuit',
      desc: 'Short, intense circuits to burn calories while keeping muscle.',
      bullets: ['EMOM or Tabata templates', 'Burpees, mountain climbers, swings', '4×/week, 20 minutes'],
    },
    {
      title: 'Flexibility & Mobility',
      desc: 'Feel lighter with daily 10–15 min mobility and stretch protocols.',
      bullets: ['Neck/shoulder, hips, ankles', 'Breathing finishers', 'Great for desk posture'],
    },
    {
      title: 'Beginner Strength Plan',
      desc: 'Build a solid base with safe, progressive sessions.',
      bullets: ['3 days/week full body', 'Goblet squats, RDLs, rows, presses', 'Linear progression'],
    },
  ]), [])

  const [open, setOpen] = useState(false)
  const [active, setActive] = useState(null)

  const openPlan = (p) => { setActive(p); setOpen(true) }
  const closePlan = () => { setOpen(false); setActive(null) }

  return (
    <section id="plans" className="bg-neutral-950 text-white py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_20%_10%,rgba(56,189,248,0.35),transparent_40%),radial-gradient(circle_at_80%_50%,rgba(16,185,129,0.35),transparent_40%)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Beginner Workout Plans"
          title="Start Simple. Get Results."
          subtitle="Pick a plan that matches your schedule. Each one is short, effective, and designed for student life in India."
          onDark
        />
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {plans.map((p, i) => (
            <motion.div key={i} variants={container} className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur hover:bg-white/10 transition-colors">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold">{p.title}</h3>
                <Dumbbell className="h-5 w-5 text-sky-400" />
              </div>
              <p className="mt-2 text-sm text-white/80">{p.desc}</p>
              <ul className="mt-4 space-y-2 text-sm text-white/80">
                {p.bullets.map((b, idx) => (
                  <li key={idx} className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-sky-400 to-emerald-400" />{b}</li>
                ))}
              </ul>
              <div className="mt-5">
                <NeonButton href="#plans" color={i % 2 === 0 ? 'blue' : 'green'} onClick={(e)=>{e.preventDefault(); openPlan(p)}}>View Plan</NeonButton>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {open && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center px-4">
          <div className="absolute inset-0 bg-black/60" onClick={closePlan} />
          <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} className="relative w-full max-w-lg rounded-2xl bg-neutral-900 text-white border border-white/10 p-6 shadow-xl">
            <button aria-label="Close" onClick={closePlan} className="absolute top-3 right-3 p-2 rounded-full hover:bg-white/10">
              <X className="h-5 w-5" />
            </button>
            <h3 className="text-xl font-bold">{active?.title}</h3>
            <p className="mt-2 text-white/80">{active?.desc}</p>
            <ul className="mt-4 space-y-2 text-sm">
              {active?.bullets?.map((b, i) => (
                <li key={i} className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-sky-400 to-emerald-400" />{b}</li>
              ))}
            </ul>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <NeonButton href="#resources" onClick={(e)=>{e.preventDefault(); document.getElementById('resources')?.scrollIntoView({behavior:'smooth'})}} color="green">Get Free PDF</NeonButton>
              <a
                href="#"
                onClick={(e)=>{e.preventDefault(); alert('Pro plans launching soon for India. Stay tuned!')}}
                className="inline-flex items-center justify-center rounded-full px-6 py-3 font-semibold bg-white/10 text-white border border-white/20 hover:bg-white/20 transition-colors"
              >
                Upgrade (₹299/month)
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  )
}

function DietGuide() {
  const guides = [
    { icon: Salad, title: 'Budget Student Meals', desc: 'Under ₹200 plates with carbs + protein + veggies.' },
    { icon: Flame, title: 'One-Meal-a-Day Ideas', desc: 'High-protein, high-satiety thalis for busy days.' },
    { icon: Dumbbell, title: 'Protein-Rich Foods', desc: 'Eggs, paneer, curd, dal, chana, rajma, tofu, chicken — easy wins.' },
    { icon: BookOpen, title: 'Tiffin Options', desc: 'Packable rotis with paneer bhurji, poha/upma, overnight oats.' },
    { icon: Droplets, title: 'Hydration Tips', desc: '2–3 litres/day with electrolytes; sip during study.' },
  ]
  return (
    <section id="diet" className="bg-white text-neutral-900 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Diet Guide"
          title="Eat Smart on a Student Budget"
          subtitle="Fuel your brain and body with simple, affordable Indian meals you can prep fast."
        />
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {guides.map((g, i) => (
            <motion.div key={i} variants={container} className="p-6 rounded-2xl border border-black/5 shadow-sm bg-white hover:shadow-lg transition-shadow">
              <g.icon className="h-6 w-6 text-emerald-600" />
              <h3 className="mt-4 font-bold text-lg">{g.title}</h3>
              <p className="mt-2 text-sm text-neutral-600">{g.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

// PDF generation for Beginner Workout Chart
function generateBeginnerWorkoutPDF() {
  const doc = new jsPDF()
  const margin = 14
  let y = margin

  doc.setFont('helvetica', 'bold')
  doc.setFontSize(18)
  doc.text('HealthTrack — Beginner Workout Chart', margin, y)
  y += 8

  doc.setFont('helvetica', 'normal')
  doc.setFontSize(11)
  doc.text('3-Day Full Body • Minimal Equipment • Student-Friendly (India)', margin, y)
  y += 10

  // Legend
  doc.setFontSize(10)
  doc.text('Legend: RPE = effort (1–10), EMOM = Every Minute On the Minute', margin, y)
  y += 6

  const sections = [
    {
      title: 'Warm-up (Daily • 5–7 min)',
      items: [
        '30s Jumping Jacks',
        '30s Inchworm Walkouts',
        '10 Bodyweight Squats',
        '20–30s Plank + 5 Deep Breaths',
      ],
    },
    {
      title: 'Day 1 — Full Body (A)',
      items: [
        'Goblet Squat — 3×8–10 @ RPE 7',
        'Push-ups (Knee if needed) — 3×6–10',
        'DB/Backpack Row — 3×10–12',
        'Hip Hinge (RDL) — 3×10',
        'Finisher: 4 min EMOM — 10 Mountain Climbers/side',
      ],
    },
    {
      title: 'Day 2 — Conditioning + Core',
      items: [
        'Circuit × 4 rounds (30s work / 15s rest):',
        '• High Knees • Bodyweight Squats • Plank Shoulder Taps • Glute Bridge',
        'Walk 5–10 min easy pace',
      ],
    },
    {
      title: 'Day 3 — Full Body (B)',
      items: [
        'Split Squat — 3×8/leg',
        'DB Overhead Press — 3×8–10',
        'DB Single-arm Row — 3×10/arm',
        'Romanian Deadlift — 3×10',
        'Finisher: 5 min — 20s Fast March • 10s Rest',
      ],
    },
    {
      title: 'Cool-down (3–5 min)',
      items: [
        'Deep Breathing 5×',
        'Hamstring + Hip Flexor Stretch',
        'Chest + Upper Back Stretch',
      ],
    },
    {
      title: 'Tips for Students in India',
      items: [
        'Keep one pair of adjustable DBs or a loaded backpack.',
        'Protein ideas: eggs, curd, paneer, dal, chana, rajma.',
        'Hydrate 2–3L/day; add a pinch of salt + lemon in summers.',
        'Sleep 7–9h; fixed wake time. Consistency > perfection.',
      ],
    },
  ]

  sections.forEach((sec) => {
    y += 6
    doc.setFont('helvetica', 'bold')
    doc.setFontSize(12)
    doc.text(sec.title, margin, y)
    y += 4
    doc.setFont('helvetica', 'normal')
    doc.setFontSize(10)

    sec.items.forEach((line) => {
      const lines = doc.splitTextToSize(line, 180)
      lines.forEach((l) => {
        if (y > 280) {
          doc.addPage()
          y = margin
        }
        doc.text(`• ${l}`, margin, y)
        y += 6
      })
    })
  })

  // Footer
  if (y > 270) { doc.addPage(); y = margin }
  doc.setFontSize(9)
  doc.setTextColor(120)
  doc.text('Crafted with Love by Akshit Sharma — Made in India ❤️', margin, 290)

  doc.save('beginner-workout-chart.pdf')
}

// PDF generation for Budget Meal Plan (Indian)
function generateBudgetMealPlanPDF() {
  const doc = new jsPDF()
  const margin = 14
  let y = margin

  const addLine = (text, opts = {}) => {
    const { bold = false, size = 10, color = 0 } = opts
    if (y > 280) { doc.addPage(); y = margin }
    doc.setFont('helvetica', bold ? 'bold' : 'normal')
    doc.setFontSize(size)
    doc.setTextColor(color)
    const lines = doc.splitTextToSize(text, 180)
    lines.forEach((l) => {
      if (y > 280) { doc.addPage(); y = margin }
      doc.text(l, margin, y)
      y += 6
    })
  }

  // Title
  doc.setFont('helvetica', 'bold')
  doc.setFontSize(18)
  doc.text('HealthTrack — Budget Meal Plan (Indian)', margin, y)
  y += 8
  doc.setFont('helvetica', 'normal')
  doc.setFontSize(11)
  doc.text('7-day student-friendly plan • High-protein • Pocket-friendly • Hostel-ready', margin, y)
  y += 10

  // Day-wise plan
  const days = [
    {
      day: 'Day 1',
      items: [
        'Breakfast: Poha + peanuts + chai/doodh',
        'Lunch: Dal–Chawal + salad (onion, cucumber, lemon)',
        'Snack: Curd (dahi) + banana',
        'Dinner: Roti + Aloo/Pea Bhaji + curd',
      ],
    },
    {
      day: 'Day 2',
      items: [
        'Breakfast: Upma with veggies',
        'Lunch: Rajma–Chawal + onion salad',
        'Snack: Sprout chaat (chana + onion + tomato + lemon + masala)',
        'Dinner: Roti + Paneer Bhurji (or Egg Bhurji) + stir-fry veggies',
      ],
    },
    {
      day: 'Day 3',
      items: [
        'Breakfast: 2–3 Boiled Eggs + 2 rotis',
        'Lunch: Chole–Chawal + cucumber raita',
        'Snack: Groundnut (moongfali) handful + fruit',
        'Dinner: Vegetable Khichdi + ghee (1 tsp) + achaar',
      ],
    },
    {
      day: 'Day 4',
      items: [
        'Breakfast: Dalia (broken wheat) with milk + nuts',
        'Lunch: Roti + Mixed Dal + seasonal sabzi',
        'Snack: Buttermilk (chaas) + roasted chana',
        'Dinner: Lemon Rice (leftover rice) + egg/paneer bhurji',
      ],
    },
    {
      day: 'Day 5',
      items: [
        'Breakfast: Idli + Sambar (use ready batter if needed)',
        'Lunch: Curd Rice + carrot/cucumber',
        'Snack: Peanut chikki or ladoo (portion controlled)',
        'Dinner: Roti + Soya/Paneer Matar + salad',
      ],
    },
    {
      day: 'Day 6',
      items: [
        'Breakfast: Masala Oats (oats + veggies) + boiled egg/paneer',
        'Lunch: Egg Curry/Paneer Curry + 2 rotis',
        'Snack: Corn (bhutta) or boiled chana + masala',
        'Dinner: Veg Pulao + raita',
      ],
    },
    {
      day: 'Day 7',
      items: [
        'Breakfast: Paratha (aloo/paneer) + curd',
        'Lunch: Moong Dal–Chawal + ghee (1 tsp)',
        'Snack: Fruit bowl (banana + apple if budget) + peanuts',
        'Dinner: Roti + Lauki/Beans sabzi + omelette/tofu',
      ],
    },
  ]

  addLine('Weekly Plan', { bold: true, size: 13 })
  y -= 2
  days.forEach((d) => {
    addLine(`${d.day}`, { bold: true, size: 11 })
    d.items.forEach((it) => addLine(`• ${it}`))
    y += 2
  })

  // Shopping list with INR
  addLine('Budget Shopping List (Approx. 1 week prices in INR)', { bold: true, size: 13 })
  const shopping = [
    'Rice 2 kg — ₹120',
    'Wheat flour (atta) 2 kg — ₹90',
    'Moong dal 1 kg — ₹130',
    'Chana/Rajma 1 kg — ₹90 / ₹140',
    'Poha 1 kg — ₹60; Suji 1 kg — ₹60',
    'Eggs 30 pcs — ₹180 (or Paneer 500 g — ₹180)',
    'Milk 2 L — ₹120; Curd 1 kg — ₹70',
    'Peanuts 500 g — ₹100',
    'Cooking oil + spices — ₹150',
    'Onion/Potato 2 kg — ₹120; Seasonal veggies — ₹250',
    'Fruits (bananas ×12) — ₹60; Lemons — ₹20',
  ]
  shopping.forEach((s) => addLine(`• ${s}`))
  addLine('Approx total for basics: ₹1,370–₹1,650 depending on city and season.', { color: 60 })

  // Tips
  addLine('Hostel-Friendly Tips', { bold: true, size: 13 })
  const tips = [
    'Batch cook dal/rajma/chana; use leftovers for chaat or pulao.',
    'Use pressure cooker/one-pot recipes to save gas/time.',
    'Prioritise protein in every meal: eggs, curd, paneer, dals, chana.',
    'Hydrate 2–3L/day; add nimbu + pinch of salt in hot weather for electrolytes.',
    'Keep healthy snacks handy: roasted chana, peanuts, fruits.',
  ]
  tips.forEach((t) => addLine(`• ${t}`))

  // Footer credits
  if (y > 270) { doc.addPage(); y = margin }
  doc.setFont('helvetica', 'normal')
  doc.setFontSize(9)
  doc.setTextColor(120)
  doc.text('Crafted with Love by Akshit Sharma — Made in India ❤️', margin, 290)

  doc.save('budget-meal-plan-indian.pdf')
}

function TransformationTips() {
  const tips = [
    { icon: Moon, title: 'Sleep Wins', desc: '7–9 hours nightly. Fixed wake time. Dark, cool room. No phone 30 min before bed.' },
    { icon: Clock, title: 'Time Block', desc: 'Study sprints of 50/10. Short 10–15 min workouts between sessions for energy.' },
    { icon: Droplets, title: 'Hydration', desc: '2–3L water daily. Add nimbu + pinch of salt in hot weather for electrolytes.' },
    { icon: Leaf, title: 'Walk More', desc: '5–8k steps/day. Take stairs. Short walks after meals for digestion and focus.' },
  ]
  return (
    <section id="tips" className="bg-white text-neutral-900 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Transformation Tips"
          title="Small Habits. Big Results."
          subtitle="Quick wins you can apply today to feel better, study sharper, and train consistently."
        />
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {tips.map((t, i) => (
            <motion.div key={i} variants={container} className="p-6 rounded-2xl border border-black/5 shadow-sm bg-white hover:shadow-lg transition-shadow">
              <t.icon className="h-6 w-6 text-sky-600" />
              <h3 className="mt-4 font-bold text-lg">{t.title}</h3>
              <p className="mt-2 text-sm text-neutral-600">{t.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function Resources() {
  const files = [
    { key: 'beginner', title: 'Beginner Workout Chart (PDF)', desc: 'Weekly template + exercise reference.', color: 'blue' },
    { key: 'meal', title: 'Budget Meal Plan (PDF)', desc: '7-day plan with shopping list.', color: 'green' },
    { key: 'study', title: 'Study + Fitness Guide (PDF)', desc: 'Time-blocking, routines, and focus tactics.', color: 'blue' },
  ]

  const downloadPlaceholder = (title) => {
    const content = `HealthTrack — ${title}\n\nThis is a free starter resource for Indian students. Detailed PDFs are coming soon.`
    const blob = new Blob([content], { type: 'application/pdf' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = title.toLowerCase().replace(/\s+/g, '-') + '.pdf'
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  const handleDownload = (key, title) => {
    if (key === 'beginner') {
      generateBeginnerWorkoutPDF()
    } else if (key === 'meal') {
      generateBudgetMealPlanPDF()
    } else {
      downloadPlaceholder(title)
    }
  }

  return (
    <section id="resources" className="bg-white text-neutral-900 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Free Resources"
          title="Downloadable Tools to Get You Started"
          subtitle="Grab these ready-to-use PDFs. Perfect for printing or saving to your phone."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {files.map((f, i) => (
            <div key={i} className="p-6 rounded-2xl border border-black/5 bg-white shadow-sm flex flex-col">
              <div className="flex items-center gap-3">
                <Download className={`h-6 w-6 ${f.color === 'green' ? 'text-emerald-600' : 'text-sky-600'}`} />
                <h3 className="font-bold">{f.title}</h3>
              </div>
              <p className="mt-2 text-sm text-neutral-600 flex-1">{f.desc}</p>
              <div className="mt-4">
                <NeonButton href="#resources" color={f.color === 'green' ? 'green' : 'blue'} onClick={(e)=>{e.preventDefault(); handleDownload(f.key, f.title)}}>Download</NeonButton>
              </div>
            </div>
          ))}
        </div>

        {/* Monetisation-ready strip */}
        <div className="mt-10 grid md:grid-cols-3 gap-4">
          {['Ad Spot — Leaderboard','Featured Guide — Premium PDF','Ad Spot — Square'].map((label, i) => (
            <div key={i} className="rounded-xl border border-dashed border-neutral-300 p-6 text-center text-sm text-neutral-500 bg-neutral-50">
              {label}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Testimonials() {
  const items = [
    { name: 'Aarav • 1st year', text: '10-minute mornings changed my day. More energy, better focus in class.' },
    { name: 'Meera • CS student', text: 'Budget meal plan helped me lose 5 kg while studying for exams.' },
    { name: 'Rahul • Final year', text: 'Short strength sessions + sleep routine = best semester I’ve had.' },
  ]
  return (
    <section id="testimonials" className="bg-neutral-950 text-white py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_30%_20%,rgba(56,189,248,0.35),transparent_40%),radial-gradient(circle_at_70%_70%,rgba(16,185,129,0.35),transparent_40%)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Student Stories"
          title="Real Results. Real Students."
          subtitle="Your path can be this simple too. Start with one small habit today."
          onDark
        />
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((t, i) => (
            <motion.div
              key={i}
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
            >
              <Quote className="h-6 w-6 text-emerald-400" />
              <p className="mt-4 text-white/90">“{t.text}”</p>
              <div className="mt-4 flex items-center justify-between text-sm text-white/70">
                <span>{t.name}</span>
                <div className="flex items-center gap-1 text-amber-400">
                  <Star className="h-4 w-4 fill-current" />
                  <Star className="h-4 w-4 fill-current" />
                  <Star className="h-4 w-4 fill-current" />
                  <Star className="h-4 w-4 fill-current" />
                  <Star className="h-4 w-4 fill-current" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="bg-white dark:bg-neutral-950 text-neutral-900 dark:text-white py-12 border-t border-black/5 dark:border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 font-extrabold text-lg">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-neutral-900 text-white dark:bg-white dark:text-neutral-900">HT</span>
              HealthTrack
            </div>
            <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-300">
              Strong Body. Sharp Mind. Student Life Upgraded.
            </p>
          </div>
          <div>
            <h4 className="font-semibold">Explore</h4>
            <ul className="mt-3 space-y-2 text-sm text-neutral-600 dark:text-neutral-300">
              <li><a href="#plans" className="hover:text-sky-600" onClick={(e)=>{e.preventDefault();document.getElementById('plans')?.scrollIntoView({behavior:'smooth'})}}>Free Plan</a></li>
              <li><a href="#resources" className="hover:text-sky-600" onClick={(e)=>{e.preventDefault();document.getElementById('resources')?.scrollIntoView({behavior:'smooth'})}}>Resources</a></li>
              <li><a href="#diet" className="hover:text-sky-600" onClick={(e)=>{e.preventDefault();document.getElementById('diet')?.scrollIntoView({behavior:'smooth'})}}>Diet Guide</a></li>
              <li><a href="#tips" className="hover:text-sky-600" onClick={(e)=>{e.preventDefault();document.getElementById('tips')?.scrollIntoView({behavior:'smooth'})}}>Transformation Tips</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Connect</h4>
            <ul className="mt-3 space-y-2 text-sm text-neutral-600 dark:text-neutral-300">
              <li><a href="mailto:hello@healthtrack.in" className="hover:text-sky-600">hello@healthtrack.in</a></li>
              <li className="flex items-center gap-3">
                <a href="#" className="hover:text-sky-600 inline-flex items-center gap-1"><Share2 className="h-4 w-4" />Instagram</a>
              </li>
              <li className="flex items-center gap-3">
                <a href="#" className="hover:text-sky-600 inline-flex items-center gap-1"><Share2 className="h-4 w-4" />YouTube</a>
              </li>
              <li className="flex items-center gap-3">
                <a href="#" className="hover:text-sky-600 inline-flex items-center gap-1"><Share2 className="h-4 w-4" />X</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Get Started</h4>
            <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-300">Join free and start your first 10-minute routine today.</p>
            <div className="mt-4"><NeonButton href="#plans">Start Free Plan</NeonButton></div>
          </div>
        </div>
        <div className="mt-10 text-xs text-neutral-500 dark:text-neutral-400">
          © {new Date().getFullYear()} HealthTrack. Built for students in India.
        </div>
        <div className="mt-1 text-xs text-neutral-500 dark:text-neutral-400">
          Crafted with Love by Akshit Sharma ❤️
        </div>
        <div className="mt-1 text-xs text-neutral-500 dark:text-neutral-400">
          Made in India ❤️
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-900 dark:bg-neutral-950 dark:text-white">
      <Navbar />
      <Hero />
      <About />
      <Plans />
      <DietGuide />
      <TransformationTips />
      <Resources />
      <Testimonials />
      <Footer />
    </div>
  )
}
