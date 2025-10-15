// Alumni Directory and Forum System
class AlumniSystem {
    constructor() {
        this.alumni = [];
        this.leadership = [];
        this.forumPosts = [];
        this.currentUser = null;
        this.currentTab = 'directory';
        this.currentCategory = 'all';
        this.init();
    }

    init() {
        this.loadSampleData();
        this.setupEventListeners();
        this.renderAlumniDirectory();
        this.renderLeadershipGrid();
        this.renderForumPosts();
        this.setupSearchAndFilters();
    }

    // Sample data initialization
    loadSampleData() {
        // Sample alumni data
        this.alumni = [
            {
                id: 1,
                name: "Rahul Kumar",
                batch: "2023",
                profession: "Software Engineer",
                email: "rahul.kumar@gmail.com",
                location: "Bangalore, Karnataka",
                bio: "Passionate software developer working at Google. Love building scalable applications.",
                avatar: "https://ui-avatars.com/api/?name=Rahul+Kumar&background=f59e0b&color=fff&size=128",
                company: "Google"
            },
            {
                id: 2,
                name: "Priya Sharma",
                batch: "2022",
                profession: "Medical Doctor",
                email: "priya.sharma@gmail.com",
                location: "Mumbai, Maharashtra",
                bio: "Pediatrician at AIIMS Mumbai. Dedicated to children's healthcare.",
                avatar: "https://ui-avatars.com/api/?name=Priya+Sharma&background=3b82f6&color=fff&size=128",
                company: "AIIMS Mumbai"
            },
            {
                id: 3,
                name: "Amit Patel",
                batch: "2021",
                profession: "Business Analyst",
                email: "amit.patel@gmail.com",
                location: "Delhi, NCR",
                bio: "Business analyst at McKinsey. Helping companies make data-driven decisions.",
                avatar: "https://ui-avatars.com/api/?name=Amit+Patel&background=10b981&color=fff&size=128",
                company: "McKinsey & Company"
            },
            {
                id: 4,
                name: "Neha Singh",
                batch: "2020",
                profession: "Data Scientist",
                email: "neha.singh@gmail.com",
                location: "Hyderabad, Telangana",
                bio: "Data scientist at Amazon. Specializing in machine learning and AI.",
                avatar: "https://ui-avatars.com/api/?name=Neha+Singh&background=8b5cf6&color=fff&size=128",
                company: "Amazon"
            },
            {
                id: 5,
                name: "Vikram Malhotra",
                batch: "2019",
                profession: "Civil Engineer",
                email: "vikram.malhotra@gmail.com",
                location: "Pune, Maharashtra",
                bio: "Senior civil engineer at L&T. Working on infrastructure projects.",
                avatar: "https://ui-avatars.com/api/?name=Vikram+Malhotra&background=ef4444&color=fff&size=128",
                company: "Larsen & Toubro"
            },
            {
                id: 6,
                name: "Anjali Verma",
                batch: "2018",
                profession: "Teacher",
                email: "anjali.verma@gmail.com",
                location: "Patna, Bihar",
                bio: "Mathematics teacher at a prestigious school. Passionate about education.",
                avatar: "https://ui-avatars.com/api/?name=Anjali+Verma&background=f59e0b&color=fff&size=128",
                company: "Delhi Public School"
            }
        ];

        // Alumni Leadership Structure
        this.leadership = [
            {
                id: 1,
                name: "Ajeet Kumar",
                designation: "President",
                batch: "1990",
                location: "Patna",
                email: "ajeet.kumar@gyanniketanalumni.org",
                bio: "Leading the alumni association with over 30 years of experience in business leadership.",
                avatar: "https://ui-avatars.com/api/?name=Ajeet+Kumar&background=dc2626&color=fff&size=128",
                company: "Independent Consultant",
                icon: "fas fa-crown",
                priority: 1
            },
            {
                id: 2,
                name: "Nishant Sinha",
                designation: "Vice President",
                batch: "1991",
                location: "Lucknow",
                email: "nishant.sinha@gyanniketanalumni.org",
                bio: "Supporting alumni initiatives and fostering community connections across India.",
                avatar: "https://ui-avatars.com/api/?name=Nishant+Sinha&background=dc2626&color=fff&size=128",
                company: "Tech Solutions Pvt Ltd",
                icon: "fas fa-star",
                priority: 2
            },
            {
                id: 3,
                name: "Dr. Kumar Rajan",
                designation: "General Secretary",
                batch: "1991",
                location: "Delhi",
                email: "kumar.rajan@gyanniketanalumni.org",
                bio: "Managing day-to-day operations and coordinating alumni events nationwide.",
                avatar: "https://ui-avatars.com/api/?name=Kumar+Rajan&background=dc2626&color=fff&size=128",
                company: "AIIMS Delhi",
                icon: "fas fa-clipboard-list",
                priority: 3
            },
            {
                id: 4,
                name: "Niraj Agrawal",
                designation: "Treasurer",
                batch: "1993",
                location: "Patna",
                email: "niraj.agrawal@gyanniketanalumni.org",
                bio: "Managing finances and ensuring transparency in all alumni association activities.",
                avatar: "https://ui-avatars.com/api/?name=Niraj+Agrawal&background=dc2626&color=fff&size=128",
                company: "CA & Associates",
                icon: "fas fa-coins",
                priority: 4
            },
            {
                id: 5,
                name: "Abhijeet Kumar",
                designation: "Executive Committee Member",
                batch: "2002",
                location: "Patna",
                email: "abhijeet.kumar@gyanniketanalumni.org",
                bio: "Driving technology initiatives and digital transformation for alumni network.",
                avatar: "https://ui-avatars.com/api/?name=Abhijeet+Kumar&background=1e40af&color=fff&size=128",
                company: "Tech Innovators",
                icon: "fas fa-laptop-code",
                priority: 5
            },
            {
                id: 6,
                name: "Pradeep Dutta",
                designation: "Executive Committee Member",
                batch: "1998",
                location: "Patna",
                email: "pradeep.dutta@gyanniketanalumni.org",
                bio: "Coordinating regional chapters and expanding alumni network reach.",
                avatar: "https://ui-avatars.com/api/?name=Pradeep+Dutta&background=1e40af&color=fff&size=128",
                company: "Regional Development Corp",
                icon: "fas fa-network-wired",
                priority: 6
            },
            {
                id: 7,
                name: "Shiv Anant",
                designation: "Executive Committee Member",
                batch: "1993",
                location: "Patna",
                email: "shiv.anant@gyanniketanalumni.org",
                bio: "Managing alumni mentorship programs and career guidance initiatives.",
                avatar: "https://ui-avatars.com/api/?name=Shiv+Anant&background=1e40af&color=fff&size=128",
                company: "Career Guidance Solutions",
                icon: "fas fa-graduation-cap",
                priority: 7
            },
            {
                id: 8,
                name: "Amit Jha",
                designation: "Executive Committee Member",
                batch: "1995",
                location: "Muzaffarpur",
                email: "amit.jha@gyanniketanalumni.org",
                bio: "Leading sports and cultural activities within the alumni community.",
                avatar: "https://ui-avatars.com/api/?name=Amit+Jha&background=1e40af&color=fff&size=128",
                company: "Sports & Culture Foundation",
                icon: "fas fa-trophy",
                priority: 8
            },
            {
                id: 9,
                name: "Kushal Sharma",
                designation: "Executive Committee Member",
                batch: "2004",
                location: "New Delhi",
                email: "kushal.sharma@gyanniketanalumni.org",
                bio: "Managing public relations and media outreach for alumni events.",
                avatar: "https://ui-avatars.com/api/?name=Kushal+Sharma&background=1e40af&color=fff&size=128",
                company: "Media Solutions Inc",
                icon: "fas fa-bullhorn",
                priority: 9
            }
        ];

        // Sample forum posts
        this.forumPosts = [
            {
                id: 1,
                title: "Reunion Planning for 2025",
                content: "Hey everyone! I'm thinking of organizing a reunion for our batch this year. Would love to hear your thoughts on dates and venue preferences.",
                author: "Rahul Kumar",
                authorId: 1,
                category: "events",
                timestamp: new Date('2024-01-15T10:30:00'),
                upvotes: 15,
                downvotes: 2,
                comments: [
                    {
                        id: 1,
                        author: "Priya Sharma",
                        authorId: 2,
                        content: "Great idea! I'm definitely in. How about December?",
                        timestamp: new Date('2024-01-15T11:00:00'),
                        upvotes: 8,
                        downvotes: 0,
                        replies: []
                    },
                    {
                        id: 2,
                        author: "Amit Patel",
                        authorId: 3,
                        content: "December works for me too. Patna would be perfect for the venue.",
                        timestamp: new Date('2024-01-15T11:30:00'),
                        upvotes: 6,
                        downvotes: 0,
                        replies: []
                    }
                ]
            },
            {
                id: 2,
                title: "Career Advice for Recent Graduates",
                content: "I'm a 2023 graduate and looking for advice on starting my career in software development. Any tips on building a strong portfolio and preparing for interviews?",
                author: "New Graduate",
                authorId: 0,
                category: "career",
                timestamp: new Date('2024-01-14T14:20:00'),
                upvotes: 23,
                downvotes: 1,
                comments: [
                    {
                        id: 3,
                        author: "Rahul Kumar",
                        authorId: 1,
                        content: "Focus on building real projects, contribute to open source, and practice coding problems daily. Consistency is key!",
                        timestamp: new Date('2024-01-14T15:00:00'),
                        upvotes: 12,
                        downvotes: 0,
                        replies: []
                    }
                ]
            },
            {
                id: 3,
                title: "Memories from School Days",
                content: "Remember the annual sports day when it rained and we had to move everything indoors? That was such a fun day! What are your favorite memories from school?",
                author: "Neha Singh",
                authorId: 4,
                category: "memories",
                timestamp: new Date('2024-01-13T09:15:00'),
                upvotes: 31,
                downvotes: 0,
                comments: [
                    {
                        id: 4,
                        author: "Vikram Malhotra",
                        authorId: 5,
                        content: "Oh yes! And the science fair where our project won first prize. Those were the days!",
                        timestamp: new Date('2024-01-13T10:00:00'),
                        upvotes: 9,
                        downvotes: 0,
                        replies: []
                    }
                ]
            }
        ];
    }

    // Event listeners setup
    setupEventListeners() {
        // Tab switching
        document.getElementById('directory-tab').addEventListener('click', () => this.switchTab('directory'));
        document.getElementById('leadership-tab').addEventListener('click', () => this.switchTab('leadership'));
        document.getElementById('forum-tab').addEventListener('click', () => this.switchTab('forum'));

        // Modal controls
        document.getElementById('add-alumni-btn').addEventListener('click', () => this.showModal('add-alumni-modal'));
        document.getElementById('close-alumni-modal').addEventListener('click', () => this.hideModal('add-alumni-modal'));
        document.getElementById('cancel-alumni-btn').addEventListener('click', () => this.hideModal('add-alumni-modal'));
        document.getElementById('new-post-btn').addEventListener('click', () => this.showModal('new-post-modal'));
        document.getElementById('close-post-modal').addEventListener('click', () => this.hideModal('new-post-modal'));
        document.getElementById('cancel-post-btn').addEventListener('click', () => this.hideModal('new-post-modal'));

        // Form submissions
        document.getElementById('add-alumni-form').addEventListener('submit', (e) => this.handleAddAlumni(e));
        document.getElementById('new-post-form').addEventListener('submit', (e) => this.handleNewPost(e));

        // Forum category filtering
        document.querySelectorAll('.forum-category').forEach(btn => {
            btn.addEventListener('click', (e) => this.filterForumPosts(e.target.dataset.category));
        });

        // Load more functionality
        document.getElementById('load-more-btn').addEventListener('click', () => this.loadMoreAlumni());

        // Enhanced batch filter with scrolling
        const batchFilter = document.getElementById('batch-filter');
        if (batchFilter) {
            // Add scroll indicator on hover
            batchFilter.addEventListener('mouseenter', function() {
                if (this.scrollHeight > this.clientHeight) {
                    this.setAttribute('title', 'Scroll to see more batches (Use arrow keys, Page Up/Down, Home/End)');
                }
            });
            
            // Visual feedback when scrollable content is available
            batchFilter.addEventListener('focus', function() {
                if (this.scrollHeight > this.clientHeight) {
                    this.classList.add('scrollable-active');
                }
            });
            
            batchFilter.addEventListener('blur', function() {
                this.classList.remove('scrollable-active');
            });
        }

        // Forum threaded replies - event delegation
        const forumContainer = document.getElementById('forum-posts');
        forumContainer.addEventListener('click', (e) => {
            const replyBtn = e.target.closest('[data-action="reply"]');
            if (replyBtn) {
                const postId = parseInt(replyBtn.getAttribute('data-post-id'));
                const commentId = replyBtn.getAttribute('data-comment-id');
                this.toggleReplyForm(postId, commentId ? parseInt(commentId) : null, replyBtn);
                return;
            }
        });
        forumContainer.addEventListener('submit', (e) => {
            const form = e.target.closest('.reply-form');
            if (form) {
                e.preventDefault();
                const postId = parseInt(form.getAttribute('data-post-id'));
                const parentCommentId = form.getAttribute('data-parent-id');
                const textarea = form.querySelector('textarea');
                const content = (textarea.value || '').trim();
                if (!content) return;
                this.addReply(postId, parentCommentId ? parseInt(parentCommentId) : null, content);
            }
        });
    }

    // Tab switching
    switchTab(tab) {
        this.currentTab = tab;
        
        // Hide all sections
        document.getElementById('directory-section').classList.add('hidden');
        document.getElementById('leadership-section').classList.add('hidden');
        document.getElementById('forum-section').classList.add('hidden');
        
        // Reset all tab styles
        ['directory-tab', 'leadership-tab', 'forum-tab'].forEach(tabId => {
            const tabElement = document.getElementById(tabId);
            tabElement.classList.remove('bg-gradient-to-r', 'from-secondary', 'to-orange-500');
            tabElement.classList.add('bg-white/10', 'hover:bg-white/20');
        });
        
        // Show selected section and style active tab
        if (tab === 'directory') {
            document.getElementById('directory-section').classList.remove('hidden');
            const activeTab = document.getElementById('directory-tab');
            activeTab.classList.remove('bg-white/10', 'hover:bg-white/20');
            activeTab.classList.add('bg-gradient-to-r', 'from-secondary', 'to-orange-500');
        } else if (tab === 'leadership') {
            document.getElementById('leadership-section').classList.remove('hidden');
            const activeTab = document.getElementById('leadership-tab');
            activeTab.classList.remove('bg-white/10', 'hover:bg-white/20');
            activeTab.classList.add('bg-gradient-to-r', 'from-secondary', 'to-orange-500');
        } else if (tab === 'forum') {
            document.getElementById('forum-section').classList.remove('hidden');
            const activeTab = document.getElementById('forum-tab');
            activeTab.classList.remove('bg-white/10', 'hover:bg-white/20');
            activeTab.classList.add('bg-gradient-to-r', 'from-secondary', 'to-orange-500');
        }
    }

    // Modal management with animations and contained scroll
    showModal(modalId) {
        const modal = document.getElementById(modalId);
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';

        // animate in
        const panel = modal.querySelector('div');
        if (panel) {
            panel.style.transition = 'transform 200ms ease, opacity 200ms ease';
            panel.style.transform = 'scale(0.98) translateY(6px)';
            panel.style.opacity = '0';
            // contained scroll to prevent scroll chaining
            panel.style.overscrollBehavior = 'contain';
            // focus first input if available (for Add Alumni)
            const firstInput = panel.querySelector('input, textarea, select, button');
            setTimeout(() => {
                panel.style.transform = 'scale(1) translateY(0)';
                panel.style.opacity = '1';
                if (firstInput) firstInput.focus();
            }, 10);

            // Prevent wheel from bubbling to body on some browsers
            panel.addEventListener('wheel', (e) => {
                e.stopPropagation();
            }, { passive: true });
        }
    }

    hideModal(modalId) {
        const modal = document.getElementById(modalId);
        const panel = modal.querySelector('div');
        if (panel) {
            panel.style.transition = 'transform 180ms ease, opacity 180ms ease';
            panel.style.transform = 'scale(0.98) translateY(8px)';
            panel.style.opacity = '0';
            setTimeout(() => {
                modal.classList.add('hidden');
                document.body.style.overflow = 'auto';
                // Reset forms
                if (modalId === 'add-alumni-modal') {
                    document.getElementById('add-alumni-form').reset();
                } else if (modalId === 'new-post-modal') {
                    document.getElementById('new-post-form').reset();
                }
            }, 180);
        } else {
            modal.classList.add('hidden');
            document.body.style.overflow = 'auto';
            if (modalId === 'add-alumni-modal') {
                document.getElementById('add-alumni-form').reset();
            } else if (modalId === 'new-post-modal') {
                document.getElementById('new-post-form').reset();
            }
        }
    }

    // Search and filter setup
    setupSearchAndFilters() {
        const searchInput = document.getElementById('search-input');
        const batchFilter = document.getElementById('batch-filter');
        const professionFilter = document.getElementById('profession-filter');

        // Populate batch filter with all years from 1986 to 2025
        this.populateBatchFilter();
        this.populateProfessionFilter();
        this.enhanceBatchFilterScrolling();

        searchInput.addEventListener('input', () => this.filterAlumni());
        batchFilter.addEventListener('change', () => this.filterAlumni());
        professionFilter.addEventListener('change', () => this.filterAlumni());
    }

    // Enhanced populate batch filter dropdown with all years from 1986 to 2025
    populateBatchFilter() {
        const batchFilter = document.getElementById('batch-filter');
        if (!batchFilter) return;
        
        batchFilter.innerHTML = '';
        
        // Add 'All' option
        const optionAll = document.createElement('option');
        optionAll.value = '';
        optionAll.text = 'All Batches';
        batchFilter.appendChild(optionAll);
        
        // Generate all years from 2025 down to 1986
        for (let year = 2025; year >= 1986; year--) {
            const option = document.createElement('option');
            option.value = year.toString();
            option.text = `Batch ${year}`;
            batchFilter.appendChild(option);
        }
    }

    // Add enhanced scrolling functionality
    enhanceBatchFilterScrolling() {
        const batchFilter = document.getElementById('batch-filter');
        if (!batchFilter) return;
        
        // Smooth scroll to selected option when dropdown opens
        batchFilter.addEventListener('focus', function() {
            const selectedOption = this.querySelector('option:checked') || this.querySelector('option[selected]');
            if (selectedOption) {
                setTimeout(() => {
                    selectedOption.scrollIntoView({ 
                        behavior: 'smooth', 
                        block: 'center' 
                    });
                }, 100);
            }
        });
        
        // Add scroll indicators
        batchFilter.addEventListener('scroll', function() {
            const scrollPercentage = (this.scrollTop / (this.scrollHeight - this.clientHeight)) * 100;
            
            // Add visual feedback for scroll position
            if (scrollPercentage > 5) {
                this.style.borderTopColor = '#f59e0b';
            } else {
                this.style.borderTopColor = '#e5e7eb';
            }
            
            if (scrollPercentage < 95) {
                this.style.borderBottomColor = '#f59e0b';
            } else {
                this.style.borderBottomColor = '#e5e7eb';
            }
        });
        
        // Enhanced keyboard navigation
        batchFilter.addEventListener('keydown', function(e) {
            if (e.key === 'Home') {
                e.preventDefault();
                this.selectedIndex = 0;
                this.scrollTop = 0;
            } else if (e.key === 'End') {
                e.preventDefault();
                this.selectedIndex = this.options.length - 1;
                this.scrollTop = this.scrollHeight;
            } else if (e.key === 'PageUp') {
                e.preventDefault();
                const visibleOptions = Math.floor(this.clientHeight / 40);
                this.selectedIndex = Math.max(0, this.selectedIndex - visibleOptions);
                this.options[this.selectedIndex].scrollIntoView({ block: 'center' });
            } else if (e.key === 'PageDown') {
                e.preventDefault();
                const visibleOptions = Math.floor(this.clientHeight / 40);
                this.selectedIndex = Math.min(this.options.length - 1, this.selectedIndex + visibleOptions);
                this.options[this.selectedIndex].scrollIntoView({ block: 'center' });
            }
        });
        
        // Add mouse wheel smooth scrolling
        batchFilter.addEventListener('wheel', function(e) {
            e.preventDefault();
            this.scrollTop += e.deltaY * 0.5;
        });
    }

    // Populate profession filter
    populateProfessionFilter() {
        const professionFilter = document.getElementById('profession-filter');
        if (!professionFilter) return;
        
        professionFilter.innerHTML = '';
        
        // Add 'All' option
        const optionAll = document.createElement('option');
        optionAll.value = '';
        optionAll.text = 'All Professions';
        professionFilter.appendChild(optionAll);
        
        // Get unique professions and sort them alphabetically
        const uniqueProfessions = [...new Set(this.alumni.map(alumni => alumni.profession))].sort();
        
        uniqueProfessions.forEach(profession => {
            const option = document.createElement('option');
            option.value = profession;
            option.text = profession;
            professionFilter.appendChild(option);
        });
    }

    // Filter alumni
    filterAlumni() {
        const searchTerm = document.getElementById('search-input').value.toLowerCase();
        const batchFilter = document.getElementById('batch-filter').value;
        const professionFilter = document.getElementById('profession-filter').value;

        let filteredAlumni = this.alumni.filter(alumni => {
            const matchesSearch = alumni.name.toLowerCase().includes(searchTerm) ||
                                alumni.profession.toLowerCase().includes(searchTerm) ||
                                alumni.batch.includes(searchTerm) ||
                                alumni.location.toLowerCase().includes(searchTerm) ||
                                alumni.company.toLowerCase().includes(searchTerm);
            
            const matchesBatch = !batchFilter || alumni.batch === batchFilter;
            const matchesProfession = !professionFilter || alumni.profession === professionFilter;
            
            return matchesSearch && matchesBatch && matchesProfession;
        });

        this.renderAlumniDirectory(filteredAlumni);
    }

    // Handle add alumni
    handleAddAlumni(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        
        const newAlumni = {
            id: this.alumni.length + 1,
            name: formData.get('name'),
            batch: formData.get('batch'),
            profession: formData.get('profession'),
            email: formData.get('email'),
            location: formData.get('location'),
            bio: formData.get('bio'),
            company: formData.get('company'),
            avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(formData.get('name'))}&background=f59e0b&color=fff&size=128`
        };
        
        this.alumni.push(newAlumni);
        this.populateBatchFilter();
        this.populateProfessionFilter();
        this.renderAlumniDirectory();
        this.hideModal('add-alumni-modal');
        
        // Show success notification (you can implement this)
        alert('Alumni added successfully!');
    }

    // Handle new post
    handleNewPost(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        
        const newPost = {
            id: this.forumPosts.length + 1,
            title: formData.get('title'),
            content: formData.get('content'),
            category: formData.get('category'),
            author: 'Current User',
            authorId: 0,
            timestamp: new Date(),
            upvotes: 0,
            downvotes: 0,
            comments: []
        };
        
        this.forumPosts.unshift(newPost);
        this.renderForumPosts();
        this.hideModal('new-post-modal');
        
        alert('Post created successfully!');
    }

    // Render alumni directory
    renderAlumniDirectory(alumniToRender = this.alumni) {
        const grid = document.getElementById('alumni-grid');
        grid.innerHTML = '';
        
        alumniToRender.forEach(alumni => {
            const card = this.createAlumniCard(alumni);
            // subtle entrance animation
            card.style.transition = 'transform 250ms ease, opacity 250ms ease';
            card.style.opacity = '0';
            card.style.transform = 'translateY(10px)';
            grid.appendChild(card);
            requestAnimationFrame(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            });
        });
    }

    // Create alumni card with mailto contact
    createAlumniCard(alumni) {
        const card = document.createElement('div');
        card.className = 'bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all duration-500 border border-gray-100/50 hover:border-secondary/30 group transform hover:-translate-y-2 hover:scale-105 alumni-card';
        
        // Create detailed email template
        const emailSubject = `Hello from Gyan Niketan Alumni Network`;
        const emailBody = `Hi ${alumni.name},

I hope this email finds you well. I came across your profile on the Gyan Niketan Alumni Network and would love to connect with you.

Your background in ${alumni.profession} at ${alumni.company} is really interesting, and I'd appreciate the opportunity to learn more about your experience.

Looking forward to hearing from you!

Best regards,
[Your Name]
Gyan Niketan Alumni`;

        const mailtoLink = `mailto:${alumni.email}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
        
        card.innerHTML = `
            <div class="flex items-start space-x-4 mb-4">
                <div class="relative">
                    <img src="${alumni.avatar}" alt="${alumni.name}" class="w-16 h-16 rounded-xl object-cover shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                    <div class="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white"></div>
                </div>
                <div class="flex-1 min-w-0">
                    <h3 class="text-xl font-bold text-gray-800 mb-1 group-hover:text-secondary transition-colors duration-300">${alumni.name}</h3>
                    <p class="text-secondary font-semibold mb-1">${alumni.profession}</p>
                    <p class="text-sm text-gray-600 flex items-center mb-1">
                        <i class="fas fa-building mr-2 text-gray-400"></i>
                        ${alumni.company}
                    </p>
                    <p class="text-sm text-gray-600 flex items-center">
                        <i class="fas fa-map-marker-alt mr-2 text-gray-400"></i>
                        ${alumni.location}
                    </p>
                </div>
            </div>
            
            <p class="text-gray-600 text-sm mb-4 line-clamp-3">${alumni.bio}</p>
            
            <div class="flex space-x-3">
                <a href="${mailtoLink}" 
                   class="flex-1 bg-secondary hover:bg-orange-600 text-white text-center py-2 px-4 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg group/contact">
                    <i class="fas fa-envelope mr-2 group-hover/contact:animate-pulse"></i>
                    Contact
                </a>
                <button onclick="alumniSystem.showUserProfile(${alumni.id})" 
                        class="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 text-center py-2 px-4 rounded-lg font-medium transition-all duration-300 transform hover:scale-105">
                    <i class="fas fa-user mr-2"></i>
                    Profile
                </button>
            </div>
        `;
        
        return card;
    }

    // Render leadership grid
    renderLeadershipGrid() {
        const grid = document.getElementById('leadership-grid');
        grid.innerHTML = '';
        
        // Sort leadership by priority
        const sortedLeadership = [...this.leadership].sort((a, b) => a.priority - b.priority);
        
        sortedLeadership.forEach(leader => {
            const card = this.createLeadershipCard(leader);
            // subtle entrance animation
            card.style.transition = 'transform 250ms ease, opacity 250ms ease';
            card.style.opacity = '0';
            card.style.transform = 'translateY(10px)';
            grid.appendChild(card);
            requestAnimationFrame(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            });
        });
    }

    // Create leadership card
    createLeadershipCard(leader) {
        const card = document.createElement('div');
        card.className = 'bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all duration-500 border border-gray-100/50 hover:border-amber-500/30 group transform hover:-translate-y-2 hover:scale-105 leadership-card';
        
        // Create email template for leadership
        const emailSubject = `Inquiry from Alumni Network - ${leader.designation}`;
        const emailBody = `Dear ${leader.name},

I hope this message finds you well. I am reaching out through the Gyan Niketan Alumni Network regarding alumni association matters.

As the ${leader.designation} of our alumni association, I would appreciate your guidance on [please specify your inquiry].

Thank you for your continued leadership and service to our alumni community.

Best regards,
[Your Name]
Gyan Niketan Alumni`;

        const mailtoLink = `mailto:${leader.email}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
        
        // Determine card styling based on position
        let designationColor = 'text-secondary';
        let iconColor = 'text-amber-500';
        let borderGlow = 'group-hover:border-amber-500/30';
        
        if (leader.designation === 'President') {
            designationColor = 'text-red-600';
            iconColor = 'text-red-500';
            borderGlow = 'group-hover:border-red-500/30';
        } else if (leader.designation === 'Vice President') {
            designationColor = 'text-purple-600';
            iconColor = 'text-purple-500';
            borderGlow = 'group-hover:border-purple-500/30';
        } else if (leader.designation === 'General Secretary' || leader.designation === 'Treasurer') {
            designationColor = 'text-blue-600';
            iconColor = 'text-blue-500';
            borderGlow = 'group-hover:border-blue-500/30';
        }
        
        card.className = `bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all duration-500 border border-gray-100/50 ${borderGlow} group transform hover:-translate-y-2 hover:scale-105 leadership-card`;
        
        card.innerHTML = `
            <div class="flex items-start space-x-4 mb-4">
                <div class="relative">
                    <img src="${leader.avatar}" alt="${leader.name}" class="w-16 h-16 rounded-xl object-cover shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                    <div class="absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full border-2 border-white flex items-center justify-center">
                        <i class="${leader.icon} text-xs text-white"></i>
                    </div>
                </div>
                <div class="flex-1 min-w-0">
                    <h3 class="text-xl font-bold text-gray-800 mb-1 group-hover:text-secondary transition-colors duration-300">${leader.name}</h3>
                    <p class="${designationColor} font-bold text-sm mb-2 flex items-center">
                        <i class="${leader.icon} mr-2 ${iconColor}"></i>
                        ${leader.designation}
                    </p>
                    <p class="text-sm text-gray-600 flex items-center mb-1">
                        <i class="fas fa-graduation-cap mr-2 text-gray-400"></i>
                        Batch ${leader.batch}
                    </p>
                    <p class="text-sm text-gray-600 flex items-center mb-1">
                        <i class="fas fa-map-marker-alt mr-2 text-gray-400"></i>
                        ${leader.location}
                    </p>
                    <p class="text-sm text-gray-600 flex items-center">
                        <i class="fas fa-building mr-2 text-gray-400"></i>
                        ${leader.company}
                    </p>
                </div>
            </div>
            
            <p class="text-gray-600 text-sm mb-4 line-clamp-3">${leader.bio}</p>
            
            <div class="flex space-x-3">
                <a href="${mailtoLink}" 
                   class="flex-1 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-orange-500 hover:to-amber-500 text-white text-center py-2 px-4 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg group/contact">
                    <i class="fas fa-envelope mr-2 group-hover/contact:animate-pulse"></i>
                    Contact Official
                </a>
                <button onclick="alumniSystem.showLeaderProfile(${leader.id})" 
                        class="flex-1 bg-gradient-to-r from-gray-100 to-gray-200 hover:from-gray-200 hover:to-gray-300 text-gray-700 text-center py-2 px-4 rounded-lg font-medium transition-all duration-300 transform hover:scale-105">
                    <i class="fas fa-id-card mr-2"></i>
                    View Profile
                </button>
            </div>
        `;
        
        return card;
    }

    // Render forum posts
    renderForumPosts() {
        const container = document.getElementById('forum-posts');
        container.innerHTML = '';
        
        this.forumPosts.forEach(post => {
            const postElement = this.createForumPost(post);
            // subtle entrance animation
            postElement.style.transition = 'transform 250ms ease, opacity 250ms ease';
            postElement.style.opacity = '0';
            postElement.style.transform = 'translateY(10px)';
            container.appendChild(postElement);
            requestAnimationFrame(() => {
                postElement.style.opacity = '1';
                postElement.style.transform = 'translateY(0)';
            });
        });
    }

    // Create forum post with threaded comments
    createForumPost(post) {
        const postDiv = document.createElement('div');
        postDiv.className = 'bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg p-6 border border-gray-100/50 hover:border-secondary/30 transition-all duration-300 forum-post';
        
        const commentsHtml = this.renderCommentsHtml(post.comments, post.id, 0);
        
        postDiv.innerHTML = `
            <div class="flex items-start space-x-6">
                <div class="flex flex-col items-center space-y-2">
                    <button class="vote-button bg-green-100 hover:bg-green-200 text-green-600 p-2 rounded-full">
                        <i class="fas fa-arrow-up"></i>
                    </button>
                    <span class="font-semibold text-gray-700">${post.upvotes - post.downvotes}</span>
                    <button class="vote-button bg-red-100 hover:bg-red-200 text-red-600 p-2 rounded-full">
                        <i class="fas fa-arrow-down"></i>
                    </button>
                </div>
                
                <div class="flex-1">
                    <h3 class="text-xl font-bold text-gray-800 mb-2 hover:text-secondary transition-colors cursor-pointer">${post.title}</h3>
                    <p class="text-gray-600 mb-4">${post.content}</p>
                    
                    <div class="flex items-center justify-between text-sm text-gray-500 mb-4">
                        <div class="flex items-center space-x-4">
                            <span><i class="fas fa-user mr-1"></i>${post.author}</span>
                            <span><i class="fas fa-clock mr-1"></i>${this.formatTimestamp(post.timestamp)}</span>
                            <span class="px-3 py-1 bg-secondary/10 text-secondary rounded-full">${post.category}</span>
                        </div>
                        <span><i class="fas fa-comments mr-1"></i>${post.comments.length} comments</span>
                    </div>

                    <div class="mb-4">
                        <button class="text-secondary font-semibold hover:underline" data-action="reply" data-post-id="${post.id}">Add comment</button>
                    </div>

                    <div class="space-y-4" data-comments-for="${post.id}">
                        ${commentsHtml}
                    </div>
                </div>
            </div>
        `;
        
        return postDiv;
    }

    // Build comments HTML recursively (indent visually via inline margin)
    renderCommentsHtml(comments, postId, depth) {
        if (!comments || !comments.length) return '';
        return comments.map(comment => {
            const repliesHtml = this.renderCommentsHtml(comment.replies || [], postId, depth + 1);
            const marginLeft = depth * 16; // px per level
            return `
                <div class="rounded-xl border border-gray-100/70 p-4 bg-white/80" style="margin-left:${marginLeft}px;">
                    <div class="flex items-start justify-between">
                        <div class="text-sm text-gray-700 font-semibold"><i class="fas fa-user mr-2 text-gray-400"></i>${comment.author}</div>
                        <div class="text-xs text-gray-500">${this.formatTimestamp(comment.timestamp)}</div>
                    </div>
                    <div class="mt-2 text-gray-700">${comment.content}</div>
                    <div class="mt-3 flex items-center space-x-4 text-sm">
                        <button class="text-secondary hover:underline" data-action="reply" data-post-id="${postId}" data-comment-id="${comment.id}">Reply</button>
                    </div>
                    <div class="mt-3 space-y-3" data-replies-for="${postId}-${comment.id}">
                        ${repliesHtml}
                    </div>
                </div>
            `;
        }).join('');
    }

    // Toggle an inline reply form under a post or specific comment
    toggleReplyForm(postId, parentCommentId, anchorEl) {
        // Determine container where to place the form
        let container;
        if (parentCommentId) {
            container = document.querySelector(`[data-replies-for="${postId}-${parentCommentId}"]`);
        } else {
            container = document.querySelector(`[data-comments-for="${postId}"]`);
        }
        if (!container) return;
        
        // If a form already exists here, remove it (toggle behavior)
        const existing = container.querySelector('.reply-form');
        if (existing) {
            existing.remove();
            return;
        }
        
        const form = document.createElement('form');
        form.className = 'reply-form';
        form.setAttribute('data-post-id', String(postId));
        if (parentCommentId) form.setAttribute('data-parent-id', String(parentCommentId));
        form.innerHTML = `
            <div class="flex items-start space-x-3">
                <textarea class="flex-1 w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-secondary focus:border-transparent" rows="3" placeholder="Write a reply..."></textarea>
                <div class="flex flex-col space-y-2">
                    <button type="submit" class="bg-secondary hover:bg-orange-600 text-white px-4 py-2 rounded-lg text-sm">Post</button>
                    <button type="button" class="bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded-lg text-sm" data-action="cancel-reply">Cancel</button>
                </div>
            </div>
        `;
        
        // Insert and animate
        container.prepend(form);
        form.style.transition = 'transform 200ms ease, opacity 200ms ease';
        form.style.opacity = '0';
        form.style.transform = 'translateY(-6px)';
        requestAnimationFrame(() => {
            form.style.opacity = '1';
            form.style.transform = 'translateY(0)';
        });
        
        // Handle cancel
        const cancelBtn = form.querySelector('[data-action="cancel-reply"]');
        cancelBtn.addEventListener('click', () => {
            form.remove();
        });
    }

    // Add a reply to a post (top-level) or to a specific comment (threaded)
    addReply(postId, parentCommentId, content) {
        const post = this.forumPosts.find(p => p.id === postId);
        if (!post) return;
        const reply = {
            id: Date.now(),
            author: 'Current User',
            authorId: 0,
            content,
            timestamp: new Date(),
            upvotes: 0,
            downvotes: 0,
            replies: []
        };
        if (!parentCommentId) {
            post.comments.push(reply);
        } else {
            const parent = this.findCommentById(post.comments, parentCommentId);
            if (!parent) return;
            if (!parent.replies) parent.replies = [];
            parent.replies.push(reply);
        }
        // Re-render just this post comments area for simplicity
        this.refreshPostComments(postId);
    }

    // Helper: find comment recursively by id
    findCommentById(comments, id) {
        for (const c of comments) {
            if (c.id === id) return c;
            const found = this.findCommentById(c.replies || [], id);
            if (found) return found;
        }
        return null;
    }

    // Re-render comments for a post id
    refreshPostComments(postId) {
        const post = this.forumPosts.find(p => p.id === postId);
        if (!post) return;
        const container = document.querySelector(`[data-comments-for="${postId}"]`);
        if (!container) return;
        container.innerHTML = this.renderCommentsHtml(post.comments, postId, 0);
        // Smooth scroll to bottom of comments area after posting
        container.scrollTo({ top: container.scrollHeight, behavior: 'smooth' });
    }

    // Show user profile
    showUserProfile(id) {
        const user = this.alumni.find(alumni => alumni.id === id);
        if (user) {
            const modal = document.getElementById('user-profile-modal');
            const content = document.getElementById('profile-content');
            
            content.innerHTML = `
                <div class="text-center mb-6">
                    <img src="${user.avatar}" alt="${user.name}" class="w-24 h-24 rounded-full mx-auto mb-4 shadow-lg">
                    <h3 class="text-2xl font-bold text-gray-800">${user.name}</h3>
                    <p class="text-secondary font-semibold">${user.profession}</p>
                </div>
                
                <div class="space-y-4">
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">Company</label>
                        <p class="text-gray-900">${user.company}</p>
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">Location</label>
                        <p class="text-gray-900">${user.location}</p>
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">Batch</label>
                        <p class="text-gray-900">${user.batch}</p>
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">About</label>
                        <p class="text-gray-900">${user.bio}</p>
                    </div>
                </div>
            `;
            
            modal.classList.remove('hidden');
        }
    }

    // Show leader profile
    showLeaderProfile(id) {
        const leader = this.leadership.find(l => l.id === id);
        if (leader) {
            const modal = document.getElementById('user-profile-modal');
            const content = document.getElementById('profile-content');
            
            content.innerHTML = `
                <div class="text-center mb-6">
                    <img src="${leader.avatar}" alt="${leader.name}" class="w-24 h-24 rounded-full mx-auto mb-4 shadow-lg">
                    <h3 class="text-2xl font-bold text-gray-800">${leader.name}</h3>
                    <p class="text-amber-600 font-bold flex items-center justify-center">
                        <i class="${leader.icon} mr-2"></i>
                        ${leader.designation}
                    </p>
                </div>
                
                <div class="space-y-4">
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">Role in Alumni Network</label>
                        <p class="text-gray-900">${leader.designation}</p>
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">Organization</label>
                        <p class="text-gray-900">${leader.company}</p>
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">Location</label>
                        <p class="text-gray-900">${leader.location}</p>
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">Batch</label>
                        <p class="text-gray-900">${leader.batch}</p>
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">About</label>
                        <p class="text-gray-900">${leader.bio}</p>
                    </div>
                </div>
            `;
            
            modal.classList.remove('hidden');
        }
    }

    // Load more alumni (placeholder)
    loadMoreAlumni() {
        // Implement pagination logic here
        alert('Load more functionality would be implemented here');
    }

    // Format timestamp
    formatTimestamp(timestamp) {
        const now = new Date();
        const diff = now - timestamp;
        const minutes = Math.floor(diff / (1000 * 60));
        const hours = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24);
        
        if (days > 0) return `${days}d ago`;
        if (hours > 0) return `${hours}h ago`;
        if (minutes > 0) return `${minutes}m ago`;
        return 'Just now';
    }
}

// Initialize the system when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    window.alumniSystem = new AlumniSystem();
    
    // Close profile modal
    document.getElementById('close-profile-modal').addEventListener('click', function() {
        document.getElementById('user-profile-modal').classList.add('hidden');
    });
});
