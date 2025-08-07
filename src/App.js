import React, { useState, useEffect } from 'react'
import { Menu, X, ChevronDown, Plane, Target, Zap, Users, Trophy, Rocket, Github, Linkedin, Mail, MapPin, Calendar, Award, Code, ArrowRight, Crown, Star, Settings, Wrench, Wind, Camera, DollarSign, Globe, Monitor } from 'lucide-react'
import './App.css'

// Button Component
const Button = ({ children, onClick, variant = 'default', className = '', ...props }) => {
  const baseClasses = 'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background'
  const variants = {
    default: 'bg-primary text-primary-foreground hover:bg-primary/90',
    outline: 'border border-input hover:bg-accent hover:text-accent-foreground'
  }
  
  return (
    <button 
      className={`${baseClasses} ${variants[variant]} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  )
}

// Card Components
const Card = ({ children, className = '', ...props }) => (
  <div className={`rounded-lg border bg-card text-card-foreground shadow-sm ${className}`} {...props}>
    {children}
  </div>
)

const CardContent = ({ children, className = '', ...props }) => (
  <div className={`p-6 pt-0 ${className}`} {...props}>
    {children}
  </div>
)

const CardHeader = ({ children, className = '', ...props }) => (
  <div className={`flex flex-col space-y-1.5 p-6 ${className}`} {...props}>
    {children}
  </div>
)

const CardTitle = ({ children, className = '', ...props }) => (
  <h3 className={`text-2xl font-semibold leading-none tracking-tight ${className}`} {...props}>
    {children}
  </h3>
)

const CardDescription = ({ children, className = '', ...props }) => (
  <p className={`text-sm text-muted-foreground ${className}`} {...props}>
    {children}
  </p>
)

// Badge Component
const Badge = ({ children, variant = 'default', className = '', ...props }) => {
  const variants = {
    default: 'bg-primary text-primary-foreground hover:bg-primary/80',
    secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
    outline: 'text-foreground border border-input hover:bg-accent hover:text-accent-foreground'
  }
  
  return (
    <div className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ${variants[variant]} ${className}`} {...props}>
      {children}
    </div>
  )
}

// Realistic Drone Component (CSS-based)
const RealisticDrone = () => {
  return (
    <div className="drone-container">
      <div className="drone">
        {/* Main body */}
        <div className="drone-body">
          <div className="drone-center"></div>
          <div className="drone-camera"></div>
        </div>
        
        {/* Arms */}
        <div className="drone-arm arm-1"></div>
        <div className="drone-arm arm-2"></div>
        <div className="drone-arm arm-3"></div>
        <div className="drone-arm arm-4"></div>
        
        {/* Motors */}
        <div className="drone-motor motor-1">
          <div className="propeller propeller-1"></div>
        </div>
        <div className="drone-motor motor-2">
          <div className="propeller propeller-2"></div>
        </div>
        <div className="drone-motor motor-3">
          <div className="propeller propeller-3"></div>
        </div>
        <div className="drone-motor motor-4">
          <div className="propeller propeller-4"></div>
        </div>
        
        {/* LED lights */}
        <div className="led-light led-front"></div>
        <div className="led-light led-back"></div>
      </div>
    </div>
  )
}

// Floating particles component
const FloatingParticles = () => {
  return (
    <div className="particles-container">
      {Array.from({ length: 30 }).map((_, i) => (
        <div 
          key={i} 
          className="particle"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${3 + Math.random() * 4}s`
          }}
        ></div>
      ))}
    </div>
  )
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId)
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: 'smooth' })
    setIsMenuOpen(false)
  }

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'team', 'projects', 'achievements']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Team Structure
  const teamStructure = {
    coordinator: {
      name: "Jainam Shah",
      role: "Overall Coordinator",
      image: "/placeholder.svg?height=200&width=200&text=JS",
      linkedin: "#",
      github: "#",
      expertise: "Project Management, Systems Integration"
    },
    managers: [
      {
        name: "Arjun Sharma",
        role: "Technical Manager",
        image: "/placeholder.svg?height=200&width=200&text=AS",
        linkedin: "#",
        github: "#",
        expertise: "Technical Strategy, R&D"
      },
      {
        name: "Priya Patel",
        role: "Operations Manager",
        image: "/placeholder.svg?height=200&width=200&text=PP",
        linkedin: "#",
        github: "#",
        expertise: "Operations, Quality Assurance"
      },
      {
        name: "Rohit Kumar",
        role: "Research Manager",
        image: "/placeholder.svg?height=200&width=200&text=RK",
        linkedin: "#",
        github: "#",
        expertise: "Research Strategy, Publications"
      },
      {
        name: "Sneha Reddy",
        role: "Development Manager",
        image: "/placeholder.svg?height=200&width=200&text=SR",
        linkedin: "#",
        github: "#",
        expertise: "Product Development, Testing"
      }
    ],
    subsystems: {
      mechatronics: {
        name: "Mechatronics Subsystem",
        icon: Wrench,
        color: "from-orange-600 to-red-600",
        lead: {
          name: "Vikram Singh",
          role: "Mechatronics Lead",
          image: "/placeholder.svg?height=200&width=200&text=VS",
          linkedin: "#",
          github: "#",
          expertise: "Mechanical Design, Hardware Integration"
        },
        seniorEngineer: {
          name: "Ananya Gupta",
          role: "Senior Mechatronics Engineer",
          image: "/placeholder.svg?height=200&width=200&text=AG",
          linkedin: "#",
          github: "#",
          expertise: "PCB Design, Sensor Integration"
        },
        members: [
          {
            name: "Karthik Menon",
            role: "Mechatronics Engineer",
            image: "/placeholder.svg?height=200&width=200&text=KM",
            linkedin: "#",
            github: "#",
            expertise: "Actuators, Motor Control"
          },
          {
            name: "Riya Joshi",
            role: "Mechatronics Engineer",
            image: "/placeholder.svg?height=200&width=200&text=RJ",
            linkedin: "#",
            github: "#",
            expertise: "Power Systems, Electronics"
          },
          {
            name: "Amit Verma",
            role: "Mechatronics Engineer",
            image: "/placeholder.svg?height=200&width=200&text=AV",
            linkedin: "#",
            github: "#",
            expertise: "Embedded Systems, Firmware"
          }
        ]
      },
      aerodynamics: {
        name: "Aerodynamics Subsystem",
        icon: Wind,
        color: "from-cyan-600 to-blue-600",
        lead: {
          name: "Deepak Nair",
          role: "Aerodynamics Lead",
          image: "/placeholder.svg?height=200&width=200&text=DN",
          linkedin: "#",
          github: "#",
          expertise: "CFD Analysis, Propeller Design"
        },
        seniorEngineer: {
          name: "Kavya Iyer",
          role: "Senior Aerodynamics Engineer",
          image: "/placeholder.svg?height=200&width=200&text=KI",
          linkedin: "#",
          github: "#",
          expertise: "Wind Tunnel Testing, Flight Dynamics"
        },
        members: [
          {
            name: "Siddharth Roy",
            role: "Aerodynamics Engineer",
            image: "/placeholder.svg?height=200&width=200&text=SR2",
            linkedin: "#",
            github: "#",
            expertise: "Airframe Design, Stability Analysis"
          },
          {
            name: "Neha Agarwal",
            role: "Aerodynamics Engineer",
            image: "/placeholder.svg?height=200&width=200&text=NA",
            linkedin: "#",
            github: "#",
            expertise: "Propulsion Systems, Efficiency"
          }
        ]
      },
      mpc: {
        name: "MPC Subsystem",
        icon: Target,
        color: "from-purple-600 to-pink-600",
        lead: {
          name: "Rajesh Khanna",
          role: "MPC Lead",
          image: "/placeholder.svg?height=200&width=200&text=RK2",
          linkedin: "#",
          github: "#",
          expertise: "Model Predictive Control, Optimization"
        },
        seniorEngineer: {
          name: "Meera Sharma",
          role: "Senior MPC Engineer",
          image: "/placeholder.svg?height=200&width=200&text=MS",
          linkedin: "#",
          github: "#",
          expertise: "Control Theory, System Identification"
        },
        members: [
          {
            name: "Aditya Pandey",
            role: "MPC Engineer",
            image: "/placeholder.svg?height=200&width=200&text=AP",
            linkedin: "#",
            github: "#",
            expertise: "Trajectory Planning, Path Optimization"
          },
          {
            name: "Pooja Desai",
            role: "MPC Engineer",
            image: "/placeholder.svg?height=200&width=200&text=PD",
            linkedin: "#",
            github: "#",
            expertise: "Real-time Control, MATLAB/Simulink"
          },
          {
            name: "Harsh Gupta",
            role: "MPC Engineer",
            image: "/placeholder.svg?height=200&width=200&text=HG",
            linkedin: "#",
            github: "#",
            expertise: "Nonlinear Control, Robust Control"
          }
        ]
      },
      perception: {
        name: "Perception Subsystem",
        icon: Camera,
        color: "from-green-600 to-teal-600",
        lead: {
          name: "Ishita Bansal",
          role: "Perception Lead",
          image: "/placeholder.svg?height=200&width=200&text=IB",
          linkedin: "#",
          github: "#",
          expertise: "Computer Vision, Deep Learning"
        },
        seniorEngineer: {
          name: "Aryan Malhotra",
          role: "Senior Perception Engineer",
          image: "/placeholder.svg?height=200&width=200&text=AM",
          linkedin: "#",
          github: "#",
          expertise: "SLAM, Object Detection"
        },
        members: [
          {
            name: "Tanvi Kapoor",
            role: "Perception Engineer",
            image: "/placeholder.svg?height=200&width=200&text=TK",
            linkedin: "#",
            github: "#",
            expertise: "Image Processing, OpenCV"
          },
          {
            name: "Nikhil Jain",
            role: "Perception Engineer",
            image: "/placeholder.svg?height=200&width=200&text=NJ",
            linkedin: "#",
            github: "#",
            expertise: "Machine Learning, Neural Networks"
          },
          {
            name: "Shreya Mishra",
            role: "Perception Engineer",
            image: "/placeholder.svg?height=200&width=200&text=SM",
            linkedin: "#",
            github: "#",
            expertise: "Sensor Fusion, Kalman Filtering"
          },
          {
            name: "Varun Tiwari",
            role: "Perception Engineer",
            image: "/placeholder.svg?height=200&width=200&text=VT",
            linkedin: "#",
            github: "#",
            expertise: "3D Vision, Point Cloud Processing"
          }
        ]
      }
    },
    business: {
      mediapr: {
        name: "Sakshi Rao",
        role: "Media & PR",
        image: "/placeholder.svg?height=200&width=200&text=SR3",
        linkedin: "#",
        github: "#",
        expertise: "Public Relations, Content Strategy"
      },
      finance: [
        {
          name: "Rahul Agrawal",
          role: "Finance Manager",
          image: "/placeholder.svg?height=200&width=200&text=RA",
          linkedin: "#",
          github: "#",
          expertise: "Financial Planning, Budget Management"
        },
        {
          name: "Divya Sinha",
          role: "Logistics Coordinator",
          image: "/placeholder.svg?height=200&width=200&text=DS",
          linkedin: "#",
          github: "#",
          expertise: "Supply Chain, Procurement"
        }
      ],
      web: [
        {
          name: "Akash Bhatt",
          role: "Web Developer",
          image: "/placeholder.svg?height=200&width=200&text=AB",
          linkedin: "#",
          github: "#",
          expertise: "Full-stack Development, UI/UX"
        },
        {
          name: "Nisha Patel",
          role: "Web Designer",
          image: "/placeholder.svg?height=200&width=200&text=NP",
          linkedin: "#",
          github: "#",
          expertise: "Frontend Development, Design Systems"
        }
      ]
    }
  }

  const projects = [
    {
      title: "Autonomous Surveillance Drone",
      description: "AI-powered surveillance system with real-time object detection, tracking, and threat assessment capabilities for security applications.",
      tech: ["Computer Vision", "Deep Learning", "ROS2", "Python", "YOLO", "OpenCV"],
      status: "Completed",
      image: "/placeholder.svg?height=300&width=400&text=Surveillance+Drone",
      features: ["Real-time object detection", "Autonomous patrol routes", "Threat classification"]
    },
    {
      title: "Swarm Intelligence Platform",
      description: "Multi-drone coordination system enabling collaborative missions, formation flying, and distributed task execution.",
      tech: ["Swarm Robotics", "C++", "MATLAB", "Communication Protocols", "Graph Theory"],
      status: "In Progress",
      image: "/placeholder.svg?height=300&width=400&text=Drone+Swarm",
      features: ["Formation control", "Task allocation", "Collision avoidance"]
    },
    {
      title: "Emergency Response UAV",
      description: "Rapid deployment drone system for disaster management, search & rescue operations, and emergency medical supply delivery.",
      tech: ["Emergency Systems", "GPS Navigation", "Thermal Imaging", "IoT", "LoRa"],
      status: "Testing",
      image: "/placeholder.svg?height=300&width=400&text=Rescue+Drone",
      features: ["Thermal imaging", "Medical supply drop", "Emergency communication"]
    },
    {
      title: "Precision Agriculture Drone",
      description: "Smart farming solution with crop monitoring, pest detection, and precision spraying capabilities using advanced sensors.",
      tech: ["Multispectral Imaging", "Machine Learning", "Precision Agriculture", "IoT"],
      status: "Development",
      image: "/placeholder.svg?height=300&width=400&text=Agri+Drone",
      features: ["Crop health monitoring", "Precision spraying", "Yield prediction"]
    }
  ]

  const achievements = [
    {
      title: "National Drone Competition 2023",
      description: "1st Place in Autonomous Navigation Challenge with our advanced SLAM implementation",
      date: "December 2023",
      icon: Trophy,
      category: "Competition"
    },
    {
      title: "IIT Bombay Tech Fest",
      description: "Best Innovation Award for Swarm Robotics demonstrating coordinated multi-drone operations",
      date: "October 2023",
      icon: Award,
      category: "Innovation"
    },
    {
      title: "IEEE Robotics Conference",
      description: "Published research paper on 'Distributed Control Systems for Autonomous UAV Swarms'",
      date: "September 2023",
      icon: Code,
      category: "Research"
    },
    {
      title: "Startup Incubation Program",
      description: "Selected for IIT Bombay's prestigious incubation program with seed funding",
      date: "August 2023",
      icon: Rocket,
      category: "Business"
    }
  ]

  return (
    <div className={`min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white transition-all duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      {/* Clean Background */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-blue-950/70 to-slate-900/90"></div>
        {/* Subtle grid */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 grid-background"></div>
        </div>
        <FloatingParticles />
      </div>

      {/* Clean Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-xl border-b border-blue-900/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-3 cursor-pointer" onClick={() => scrollToSection('home')}>
              <Plane className="h-8 w-8 text-blue-400" />
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Aerove Tech
              </span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-12">
              {[
                { id: 'home', label: 'Home' },
                { id: 'about', label: 'About' },
                { id: 'team', label: 'Team' },
                { id: 'projects', label: 'Projects' },
                { id: 'achievements', label: 'Achievements' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-lg transition-colors duration-300 hover:text-blue-400 ${
                    activeSection === item.id ? 'text-blue-400' : 'text-slate-300'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-6 border-t border-blue-900/20">
              <div className="space-y-4">
                {[
                  { id: 'home', label: 'Home' },
                  { id: 'about', label: 'About' },
                  { id: 'team', label: 'Team' },
                  { id: 'projects', label: 'Projects' },
                  { id: 'achievements', label: 'Achievements' }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="block w-full text-left py-2 text-lg text-slate-300 hover:text-blue-400 transition-colors duration-300"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section with Realistic Drone */}
      <section id="home" className="min-h-screen flex items-center justify-center relative">
        {/* Realistic Drone Background */}
        <div className="absolute inset-0 w-full h-full opacity-40">
          <RealisticDrone />
        </div>
        
        <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
          {/* Clean Title */}
          <div className="mb-12">
            <h1 className="text-7xl md:text-9xl font-bold mb-8 leading-none">
              <span className="block bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                Aerove
              </span>
              <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Tech
              </span>
            </h1>
          </div>
          
          {/* Clean Subtitle */}
          <div className="mb-16">
            <p className="text-2xl md:text-3xl text-slate-300 font-light mb-6">
              Autonomous Flight Systems
            </p>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
              IIT Bombay's premier drone research team pioneering the future of autonomous aerial vehicles through cutting-edge AI and robotics
            </p>
          </div>
          
          {/* Clean Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              onClick={() => scrollToSection('projects')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-full text-lg font-medium transition-all duration-300 hover:scale-105"
            >
              View Projects
            </Button>
            <Button 
              onClick={() => scrollToSection('team')}
              variant="outline" 
              className="border-2 border-slate-400 text-slate-300 hover:bg-slate-400 hover:text-slate-900 px-10 py-4 rounded-full text-lg font-medium transition-all duration-300 hover:scale-105"
            >
              Meet the Team
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Simple Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-8 w-8 text-slate-400" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6 bg-slate-950/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              About Aerove Tech
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              We are a passionate team of engineers and researchers at IIT Bombay, dedicated to pushing the boundaries of autonomous flight technology.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-16">
            <div className="text-center">
              <div className="bg-gradient-to-r from-blue-600 to-cyan-600 p-6 rounded-2xl w-20 h-20 mx-auto mb-8">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-6 text-white">Our Mission</h3>
              <p className="text-slate-400 text-lg leading-relaxed">
                To develop intelligent, autonomous flight systems that revolutionize industries from surveillance to emergency response.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-r from-cyan-600 to-blue-600 p-6 rounded-2xl w-20 h-20 mx-auto mb-8">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-6 text-white">Innovation Focus</h3>
              <p className="text-slate-400 text-lg leading-relaxed">
                Combining AI, computer vision, and advanced control systems to create next-generation autonomous drones.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-r from-blue-600 to-cyan-600 p-6 rounded-2xl w-20 h-20 mx-auto mb-8">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-6 text-white">Collaborative Approach</h3>
              <p className="text-slate-400 text-lg leading-relaxed">
                Working with industry partners and research institutions to bring innovations to real-world applications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section - Hierarchical Structure */}
      <section id="team" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Our Team
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              A structured organization of talented individuals working together to advance autonomous flight technology.
            </p>
          </div>

          {/* Overall Coordinator */}
          <div className="text-center mb-20">
            <h3 className="text-3xl font-bold text-white mb-12 flex items-center justify-center">
              <Crown className="h-8 w-8 text-yellow-400 mr-3" />
              Overall Coordinator
            </h3>
            <Card className="bg-slate-900/30 border-yellow-400/30 hover:bg-slate-800/50 transition-all duration-300 max-w-md mx-auto">
              <CardContent className="p-8 text-center">
                <img
                  src={teamStructure.coordinator.image || "/placeholder.svg"}
                  alt={teamStructure.coordinator.name}
                  className="w-40 h-40 rounded-full mx-auto mb-6 border-4 border-yellow-400"
                />
                <h4 className="text-2xl font-semibold mb-3 text-white">{teamStructure.coordinator.name}</h4>
                <p className="text-yellow-400 mb-3 text-lg">{teamStructure.coordinator.role}</p>
                <p className="text-slate-400 mb-6">{teamStructure.coordinator.expertise}</p>
                <div className="flex justify-center space-x-4">
                  <a href={teamStructure.coordinator.linkedin} className="text-slate-400 hover:text-blue-400 transition-colors duration-300">
                    <Linkedin className="h-6 w-6" />
                  </a>
                  <a href={teamStructure.coordinator.github} className="text-slate-400 hover:text-cyan-400 transition-colors duration-300">
                    <Github className="h-6 w-6" />
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Managers */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold text-white mb-12 flex items-center justify-center">
              <Star className="h-8 w-8 text-blue-400 mr-3" />
              Management Team
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamStructure.managers.map((manager, index) => (
                <Card key={index} className="bg-slate-900/30 border-blue-400/30 hover:bg-slate-800/50 transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <img
                      src={manager.image || "/placeholder.svg"}
                      alt={manager.name}
                      className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-blue-400"
                    />
                    <h4 className="text-xl font-semibold mb-2 text-white">{manager.name}</h4>
                    <p className="text-blue-400 mb-2">{manager.role}</p>
                    <p className="text-slate-400 text-sm mb-4">{manager.expertise}</p>
                    <div className="flex justify-center space-x-3">
                      <a href={manager.linkedin} className="text-slate-400 hover:text-blue-400 transition-colors duration-300">
                        <Linkedin className="h-5 w-5" />
                      </a>
                      <a href={manager.github} className="text-slate-400 hover:text-cyan-400 transition-colors duration-300">
                        <Github className="h-5 w-5" />
                      </a>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Technical Subsystems */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold text-white mb-12 flex items-center justify-center">
              <Settings className="h-8 w-8 text-cyan-400 mr-3" />
              Technical Subsystems
            </h3>
            
            {Object.entries(teamStructure.subsystems).map(([key, subsystem]) => (
              <div key={key} className="mb-16">
                <div className="text-center mb-8">
                  <div className={`bg-gradient-to-r ${subsystem.color} p-4 rounded-2xl w-16 h-16 mx-auto mb-4`}>
                    <subsystem.icon className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-2xl font-bold text-white">{subsystem.name}</h4>
                </div>
                
                <div className="grid gap-8">
                  {/* Lead */}
                  <div className="text-center">
                    <Badge className="mb-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white">Lead</Badge>
                    <Card className="bg-slate-900/30 border-green-400/30 hover:bg-slate-800/50 transition-all duration-300 max-w-sm mx-auto">
                      <CardContent className="p-6 text-center">
                        <img
                          src={subsystem.lead.image || "/placeholder.svg"}
                          alt={subsystem.lead.name}
                          className="w-28 h-28 rounded-full mx-auto mb-4 border-4 border-green-400"
                        />
                        <h5 className="text-lg font-semibold mb-2 text-white">{subsystem.lead.name}</h5>
                        <p className="text-green-400 mb-2">{subsystem.lead.role}</p>
                        <p className="text-slate-400 text-sm mb-4">{subsystem.lead.expertise}</p>
                        <div className="flex justify-center space-x-3">
                          <a href={subsystem.lead.linkedin} className="text-slate-400 hover:text-blue-400 transition-colors duration-300">
                            <Linkedin className="h-5 w-5" />
                          </a>
                          <a href={subsystem.lead.github} className="text-slate-400 hover:text-cyan-400 transition-colors duration-300">
                            <Github className="h-5 w-5" />
                          </a>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Senior Engineer */}
                  <div className="text-center">
                    <Badge className="mb-4 bg-gradient-to-r from-purple-600 to-violet-600 text-white">Senior Engineer</Badge>
                    <Card className="bg-slate-900/30 border-purple-400/30 hover:bg-slate-800/50 transition-all duration-300 max-w-sm mx-auto">
                      <CardContent className="p-6 text-center">
                        <img
                          src={subsystem.seniorEngineer.image || "/placeholder.svg"}
                          alt={subsystem.seniorEngineer.name}
                          className="w-28 h-28 rounded-full mx-auto mb-4 border-4 border-purple-400"
                        />
                        <h5 className="text-lg font-semibold mb-2 text-white">{subsystem.seniorEngineer.name}</h5>
                        <p className="text-purple-400 mb-2">{subsystem.seniorEngineer.role}</p>
                        <p className="text-slate-400 text-sm mb-4">{subsystem.seniorEngineer.expertise}</p>
                        <div className="flex justify-center space-x-3">
                          <a href={subsystem.seniorEngineer.linkedin} className="text-slate-400 hover:text-blue-400 transition-colors duration-300">
                            <Linkedin className="h-5 w-5" />
                          </a>
                          <a href={subsystem.seniorEngineer.github} className="text-slate-400 hover:text-cyan-400 transition-colors duration-300">
                            <Github className="h-5 w-5" />
                          </a>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Members */}
                  <div>
                    <div className="text-center mb-6">
                      <Badge className="bg-gradient-to-r from-slate-600 to-slate-700 text-white">Team Members</Badge>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                      {subsystem.members.map((member, memberIndex) => (
                        <Card key={memberIndex} className="bg-slate-900/30 border-slate-600/30 hover:bg-slate-800/50 transition-all duration-300">
                          <CardContent className="p-4 text-center">
                            <img
                              src={member.image || "/placeholder.svg"}
                              alt={member.name}
                              className="w-20 h-20 rounded-full mx-auto mb-3 border-2 border-slate-400"
                            />
                            <h6 className="text-sm font-semibold mb-1 text-white">{member.name}</h6>
                            <p className="text-slate-400 text-xs mb-2">{member.role}</p>
                            <p className="text-slate-500 text-xs mb-3">{member.expertise}</p>
                            <div className="flex justify-center space-x-2">
                              <a href={member.linkedin} className="text-slate-400 hover:text-blue-400 transition-colors duration-300">
                                <Linkedin className="h-4 w-4" />
                              </a>
                              <a href={member.github} className="text-slate-400 hover:text-cyan-400 transition-colors duration-300">
                                <Github className="h-4 w-4" />
                              </a>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Business Team */}
          <div>
            <h3 className="text-3xl font-bold text-white mb-12 flex items-center justify-center">
              <Globe className="h-8 w-8 text-emerald-400 mr-3" />
              Business Team
            </h3>
            
            <div className="grid md:grid-cols-3 gap-12">
              {/* Media & PR */}
              <div className="text-center">
                <div className="bg-gradient-to-r from-pink-600 to-rose-600 p-4 rounded-2xl w-16 h-16 mx-auto mb-4">
                  <Globe className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-white mb-6">Media & PR</h4>
                <Card className="bg-slate-900/30 border-pink-400/30 hover:bg-slate-800/50 transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <img
                      src={teamStructure.business.mediapr.image || "/placeholder.svg"}
                      alt={teamStructure.business.mediapr.name}
                      className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-pink-400"
                    />
                    <h5 className="text-lg font-semibold mb-2 text-white">{teamStructure.business.mediapr.name}</h5>
                    <p className="text-pink-400 mb-2">{teamStructure.business.mediapr.role}</p>
                    <p className="text-slate-400 text-sm mb-4">{teamStructure.business.mediapr.expertise}</p>
                    <div className="flex justify-center space-x-3">
                      <a href={teamStructure.business.mediapr.linkedin} className="text-slate-400 hover:text-blue-400 transition-colors duration-300">
                        <Linkedin className="h-5 w-5" />
                      </a>
                      <a href={teamStructure.business.mediapr.github} className="text-slate-400 hover:text-cyan-400 transition-colors duration-300">
                        <Github className="h-5 w-5" />
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Finance & Logistics */}
              <div className="text-center">
                <div className="bg-gradient-to-r from-amber-600 to-orange-600 p-4 rounded-2xl w-16 h-16 mx-auto mb-4">
                  <DollarSign className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-white mb-6">Finance & Logistics</h4>
                <div className="space-y-4">
                  {teamStructure.business.finance.map((member, index) => (
                    <Card key={index} className="bg-slate-900/30 border-amber-400/30 hover:bg-slate-800/50 transition-all duration-300">
                      <CardContent className="p-4 text-center">
                        <img
                          src={member.image || "/placeholder.svg"}
                          alt={member.name}
                          className="w-20 h-20 rounded-full mx-auto mb-3 border-2 border-amber-400"
                        />
                        <h6 className="text-sm font-semibold mb-1 text-white">{member.name}</h6>
                        <p className="text-amber-400 text-xs mb-2">{member.role}</p>
                        <p className="text-slate-400 text-xs mb-3">{member.expertise}</p>
                        <div className="flex justify-center space-x-2">
                          <a href={member.linkedin} className="text-slate-400 hover:text-blue-400 transition-colors duration-300">
                            <Linkedin className="h-4 w-4" />
                          </a>
                          <a href={member.github} className="text-slate-400 hover:text-cyan-400 transition-colors duration-300">
                            <Github className="h-4 w-4" />
                          </a>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Web Team */}
              <div className="text-center">
                <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-4 rounded-2xl w-16 h-16 mx-auto mb-4">
                  <Monitor className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-white mb-6">Web Development</h4>
                <div className="space-y-4">
                  {teamStructure.business.web.map((member, index) => (
                    <Card key={index} className="bg-slate-900/30 border-indigo-400/30 hover:bg-slate-800/50 transition-all duration-300">
                      <CardContent className="p-4 text-center">
                        <img
                          src={member.image || "/placeholder.svg"}
                          alt={member.name}
                          className="w-20 h-20 rounded-full mx-auto mb-3 border-2 border-indigo-400"
                        />
                        <h6 className="text-sm font-semibold mb-1 text-white">{member.name}</h6>
                        <p className="text-indigo-400 text-xs mb-2">{member.role}</p>
                        <p className="text-slate-400 text-xs mb-3">{member.expertise}</p>
                        <div className="flex justify-center space-x-2">
                          <a href={member.linkedin} className="text-slate-400 hover:text-blue-400 transition-colors duration-300">
                            <Linkedin className="h-4 w-4" />
                          </a>
                          <a href={member.github} className="text-slate-400 hover:text-cyan-400 transition-colors duration-300">
                            <Github className="h-4 w-4" />
                          </a>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 px-6 bg-slate-950/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Our Projects
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Cutting-edge projects showcasing our expertise in autonomous flight systems and drone technology.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {projects.map((project, index) => (
              <Card key={index} className="bg-slate-900/30 border-slate-700/50 hover:bg-slate-800/50 transition-all duration-300 overflow-hidden">
                <div className="relative">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-64 object-cover"
                  />
                  <Badge 
                    variant={project.status === 'Completed' ? 'default' : 'secondary'}
                    className="absolute top-4 right-4"
                  >
                    {project.status}
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-white text-2xl">{project.title}</CardTitle>
                  <CardDescription className="text-slate-400 text-lg">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold text-blue-400 mb-3">Key Features:</h4>
                      <ul className="text-slate-400 space-y-2">
                        {project.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center">
                            <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-blue-400 mb-3">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="outline" className="border-slate-600 text-slate-300">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Our Achievements
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Recognition and milestones marking our journey in autonomous flight technology.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {achievements.map((achievement, index) => (
              <Card key={index} className="bg-slate-900/30 border-slate-700/50 hover:bg-slate-800/50 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-6">
                    <div className="bg-gradient-to-r from-blue-600 to-cyan-600 p-4 rounded-xl flex-shrink-0">
                      <achievement.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-2xl font-semibold text-white">{achievement.title}</h3>
                        <Badge variant="outline" className="border-slate-600 text-slate-400">
                          {achievement.category}
                        </Badge>
                      </div>
                      <p className="text-slate-400 mb-4 text-lg">{achievement.description}</p>
                      <div className="flex items-center text-blue-400">
                        <Calendar className="h-5 w-5 mr-2" />
                        {achievement.date}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-32 px-6 bg-slate-950/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-xl text-slate-400 mb-16">
            Interested in collaborating or learning more about our research? We'd love to hear from you.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-12 justify-center items-center mb-16">
            <div className="flex items-center space-x-3 text-slate-300">
              <MapPin className="h-6 w-6 text-blue-400" />
              <span className="text-lg">IIT Bombay, Powai, Mumbai, India</span>
            </div>
            <div className="flex items-center space-x-3 text-slate-300">
              <Mail className="h-6 w-6 text-cyan-400" />
              <span className="text-lg">aerove@iitb.ac.in</span>
            </div>
          </div>

          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-4 rounded-full text-xl font-medium transition-all duration-300 hover:scale-105">
            Contact Us
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-slate-800">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-3 mb-4 md:mb-0">
            <Plane className="h-8 w-8 text-blue-400" />
            <span className="text-2xl font-semibold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Aerove Tech
            </span>
          </div>
          <div className="text-slate-400 text-lg">
            © 2024 Aerove Tech, IIT Bombay. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
