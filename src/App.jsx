import React, { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { Dumbbell, Flame, Salad, Droplets, Moon, Clock, BookOpen, Download, Star, Quote, Sparkles, Leaf, Share2, X } from 'lucide-react'
import Spline from '@splinetool/react-spline'

const container = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const stagger = {
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
}

function SectionTitle({ eyebrow, title, subtitle }) {
  return (
    <div className="max-w-3xl mx-auto text-center mb-10">
      {eyebrow && (
        <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-widest bg-neutral-100 text-neutral-800 dark:bg-neutral-800 dark:text-neutral-100">
          {eyebrow}
        </span>
      )}
      <h2 className="mt-4 text-3xl md:text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-neutral-600 dark:text-neutral-300 leading-relaxed">
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

function TransformationTips() {
  const tips = [
    { icon: Moon, title: 'Sleep Cycle Wins', desc: 'Aim for 7–9 hours. Fixed wake time. Limit screens 60 min before bed.' },
    { icon: Clock, title: 'Study × Fitness Balance', desc: 'Anchor short workouts between study blocks to refresh focus.' },
    { icon: Leaf, title: 'Consistency Habits', desc: 'Habit stack with daily cues. Track wins. Celebrate small progress.' },
    { icon: Sparkles, title: 'Morning Routines', desc: 'Hydrate, sunlight, 10-min mobility, then deep work sprint.' },
    { icon: BookOpen, title: 'Discipline Building', desc: 'Set weekly targets, plan sessions, and show up — especially on tough days.' },
  ]
  return (
    <section id="tips" className="bg-neutral-50 text-neutral-900 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Transformation Tips"
          title="Small Habits. Big Results."
          subtitle="Practical tactics to lock in consistency and accelerate progress without burnout."
        />
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {tips.map((t, i) => (
            <motion.div key={i} variants={container} className="p-6 rounded-2xl border border-black/5 bg-white shadow-sm hover:shadow-lg transition-shadow">
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
    { title: 'Beginner Workout Chart (PDF)', desc: 'Weekly template + exercise reference.', color: 'blue' },
    { title: 'Budget Meal Plan (PDF)', desc: '7-day plan with shopping list.', color: 'green' },
    { title: 'Study + Fitness Guide (PDF)', desc: 'Time-blocking, routines, and focus tactics.', color: 'blue' },
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
                <NeonButton href="#resources" color={f.color === 'green' ? 'green' : 'blue'} onClick={(e)=>{e.preventDefault(); downloadPlaceholder(f.title)}}>Download</NeonButton>
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
          Crafted with Love by Akshat Sharma ❤️
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
