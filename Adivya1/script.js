const navToggle = document.querySelector('.nav-toggle');
const navGroup = document.querySelector('.nav-group');

if (navToggle && navGroup) {
  navToggle.addEventListener('click', () => {
    const isOpen = navGroup.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });
}

const langButtons = document.querySelectorAll('.lang-option');
const langDisplay = document.querySelector('.lang-display');

if (langButtons.length && langDisplay) {
  langButtons.forEach((button) => {
    button.addEventListener('click', () => {
      langButtons.forEach((item) => item.classList.toggle('active', item === button));
      const selectedLanguage = button.dataset.lang || 'English';
      langDisplay.textContent = selectedLanguage;
    });
  });
}

const translations = {
  en: {
    tagline: 'From Opportunity to Achievement',
    panelTitle: 'Your scholarship journey starts here.',
    welcomeLabel: 'Welcome Back',
    loginTitle: 'Welcome Back',
    loginSubtitle: 'Continue your scholarship journey with ADIVYA.',
    emailLabel: 'Email / Mobile Number',
    passwordLabel: 'Password',
    rememberMe: 'Remember me',
    forgotPassword: 'Forgot Password?',
    loginButton: 'Login →',
    or: 'OR',
    googleButton: 'Continue with Google',
    otpButton: 'Continue with Mobile OTP',
    newUser: 'New to ADIVYA?',
    createAccount: 'Create an Account',
    privacyText: '🔐 Your information is protected and used only to personalize your scholarship journey.',
    signupLabel: 'Create Your Profile',
    signupTitle: 'Create Your ADIVYA Profile',
    signupSubtitle: 'Tell us a little about yourself so we can find the right opportunities for you.',
    fullName: 'Full Name',
    emailPhone: 'Email / Mobile Number',
    password: 'Password',
    confirmPassword: 'Confirm Password',
    preferredLanguage: 'Preferred Language',
    studentType: 'Student Type',
    createProfileButton: 'Create My Profile →',
    existingUser: 'Already have an account?',
    loginLink: 'Login',
    otpLabel: 'Secure verification',
    otpTitle: 'Verify with Mobile OTP',
    otpSubtitle: 'We sent a 6-digit code to your registered mobile number.',
    otpCode: 'OTP Code',
    verifyOtpButton: 'Verify OTP →',
    backToLogin: 'Back to Login',
    backToLoginAlt: 'Back to Login',
    recoveryLabel: 'Account recovery',
    recoveryTitle: 'Reset Your Password',
    recoverySubtitle: 'Enter your email or mobile number to receive a recovery link.',
    recoveryField: 'Email / Mobile Number',
    sendRecoveryButton: 'Send Recovery Link →',
    profileLabel: 'Let’s personalize ADIVYA',
    profileTitle: 'Let’s personalize ADIVYA',
    profileProgress: 'Step 1 of 4',
    courseLabel: 'Course',
    institutionLabel: 'Institution',
    yearLabel: 'Year of Study',
    incomeLabel: 'Family Income Range',
    locationLabel: 'Location',
    categoryLabel: 'Relevant Student Category',
    continueButton: 'Continue →',
    profileNote: 'ADIVYA will use these details to find relevant scholarship opportunities.'
  },
  te: {
    tagline: 'సన్నిధానం నుండి సాధనకు',
    panelTitle: 'మీ శిక్షా ప్రయాణం ఇక్కడ మొదలవుతుంది.',
    welcomeLabel: 'వెల్కమ్ బ్యాక్',
    loginTitle: 'వెల్కమ్ బ్యాక్',
    loginSubtitle: 'ADIVYA తో మీ స్కాలర్షిప్ ప్రయాణాన్ని కొనసాగించండి.',
    emailLabel: 'ఇమెయిల్ / మొబైల్ నంబర్',
    passwordLabel: 'పాస్వర్డ్',
    rememberMe: 'నన్ను గుర్తుంచుకో',
    forgotPassword: 'పాస్వర్డ్ మర్చిపోయారా?',
    loginButton: 'లాగిన్ →',
    or: 'లేదా',
    googleButton: 'Google తో కొనసాగించండి',
    otpButton: 'మొబైల్ OTP తో కొనసాగించండి',
    newUser: 'ADIVYA కొత్తవారా?',
    createAccount: 'ఖాతాను సృష్టించండి',
    privacyText: '🔐 మీ సమాచారం మీ స్కాలర్షిప్ ప్రయాణాన్ని personalise చేయడానికి మాత్రమే ఉపయోగించబడుతుంది.',
    signupLabel: 'ప్రొఫైల్ సృష్టించండి',
    signupTitle: 'మీ ADIVYA ప్రొఫైల్ సృష్టించండి',
    signupSubtitle: 'మీ కోసం సరైన అవకాశాలను కనుగొనడానికి మీ గురించి చెప్పండి.',
    fullName: 'పూర్ణ నామం',
    emailPhone: 'ఇమెయిల్ / మొబైల్ నంబర్',
    password: 'పాస్వర్డ్',
    confirmPassword: 'పాస్వర్డ్ నిర్ధారించండి',
    preferredLanguage: 'ఇష్టమైన భాష',
    studentType: 'విద్యార్థి రకం',
    createProfileButton: 'ప్రొఫైల్ సృష్టించండి →',
    existingUser: 'ఇప్పటికే ఖాతా ఉందా?',
    loginLink: 'లాగిన్',
    otpLabel: 'సురక్షిత ధ్రువీకరణ',
    otpTitle: 'మొబైల్ OTP తో ధ్రువీకరించండి',
    otpSubtitle: 'మీ నమోదు చేసిన మొబైల్ నంబర్కు 6 అంకెల కోడ్ పంపబడింది.',
    otpCode: 'OTP కోడ్',
    verifyOtpButton: 'OTP ధ్రువీకరించండి →',
    backToLogin: 'లాగిన్ కు తిరిగి వెళ్లండి',
    backToLoginAlt: 'లాగిన్ కు తిరిగి వెళ్లండి',
    recoveryLabel: 'ఖాతా తిరిగి పొందండి',
    recoveryTitle: 'పాస్వర్డ్ తిరిగి సెట్ చేయండి',
    recoverySubtitle: 'రికవరీ లింక్ కోసం మీ ఇమెయిల్ లేదా మొబైల్ నంబర్‌ను నమోదు చేయండి.',
    recoveryField: 'ఇమెయిల్ / మొబైల్ నంబర్',
    sendRecoveryButton: 'రికవరీ లింక్ పంపండి →',
    profileLabel: 'ADIVYA ను personalised చేయుదాం',
    profileTitle: 'ADIVYA ను personalised చేయుదాం',
    profileProgress: 'దశ 1లో 4',
    courseLabel: 'కోర్సు',
    institutionLabel: 'సంస్థ',
    yearLabel: 'అధ్యయన సంవత్సరం',
    incomeLabel: 'కుటుంబ ఆదాయం 범ు',
    locationLabel: 'స్థానం',
    categoryLabel: 'సంబంధిత విద్యార్థి వర్గం',
    continueButton: 'కొనసాగించండి →',
    profileNote: 'ADIVYA ఈ సమాచారం ఉపయోగించి సంబంధిత స్కాలర్షిప్ అవకాశాలను కనుగొంటుంది.'
  },
  hi: {
    tagline: 'अवसर से उपलब्धि तक',
    panelTitle: 'आपकी छात्रवृत्ति यात्रा यहाँ शुरू होती है।',
    welcomeLabel: 'वापसी पर स्वागत है',
    loginTitle: 'वापसी पर स्वागत है',
    loginSubtitle: 'ADIVYA के साथ अपनी छात्रवृत्ति यात्रा जारी रखें।',
    emailLabel: 'ईमेल / मोबाइल नंबर',
    passwordLabel: 'पासवर्ड',
    rememberMe: 'मुझे याद रखें',
    forgotPassword: 'पासवर्ड भूल गए?',
    loginButton: 'लॉगिन →',
    or: 'या',
    googleButton: 'Google से जारी रखें',
    otpButton: 'मोबाइल OTP से जारी रखें',
    newUser: 'ADIVYA में नया हैं?',
    createAccount: 'खाता बनाएं',
    privacyText: '🔐 आपकी जानकारी केवल आपकी छात्रवृत्ति यात्रा को व्यक्तिगत बनाने के लिए सुरक्षित रूप से उपयोग की जाती है।',
    signupLabel: 'प्रोफ़ाइल बनाएं',
    signupTitle: 'अपना ADIVYA प्रोफ़ाइल बनाएं',
    signupSubtitle: 'हम आपके लिए सही अवसर ढूंढने के लिए थोड़ी जानकारी जानना चाहते हैं।',
    fullName: 'पूरा नाम',
    emailPhone: 'ईमेल / मोबाइल नंबर',
    password: 'पासवर्ड',
    confirmPassword: 'पासवर्ड की पुष्टि करें',
    preferredLanguage: 'पसंदीदा भाषा',
    studentType: 'विद्यार्थी प्रकार',
    createProfileButton: 'मेरा प्रोफ़ाइल बनाएं →',
    existingUser: 'पहले से खाता है?',
    loginLink: 'लॉगिन',
    otpLabel: 'सुरक्षित सत्यापन',
    otpTitle: 'मोबाइल OTP से सत्यापित करें',
    otpSubtitle: 'आपके पंजीकृत मोबाइल नंबर पर 6-अंकीय कोड भेजा गया है।',
    otpCode: 'OTP कोड',
    verifyOtpButton: 'OTP सत्यापित करें →',
    backToLogin: 'लॉगिन पर वापस जाएं',
    backToLoginAlt: 'लॉगिन पर वापस जाएं',
    recoveryLabel: 'खाता रिकवरी',
    recoveryTitle: 'पासवर्ड रीसेट करें',
    recoverySubtitle: 'रिकवरी लिंक प्राप्त करने के लिए अपना ईमेल या मोबाइल नंबर दर्ज करें।',
    recoveryField: 'ईमेल / मोबाइल नंबर',
    sendRecoveryButton: 'रिकवरी लिंक भेजें →',
    profileLabel: 'ADIVYA को पर्सनलाइज़ करें',
    profileTitle: 'ADIVYA को पर्सनलाइज़ करें',
    profileProgress: 'चरण 1 का 4',
    courseLabel: 'कोर्स',
    institutionLabel: 'संस्था',
    yearLabel: 'अध्ययन वर्ष',
    incomeLabel: 'परिवार की आय सीमा',
    locationLabel: 'स्थान',
    categoryLabel: 'प्रासंगिक विद्यार्थी वर्ग',
    continueButton: 'जारी रखें →',
    profileNote: 'ADIVYA इन विवरणों का उपयोग करके सही छात्रवृत्ति अवसर खोजेगा।'
  }
};

const STORAGE_KEY = 'adivya_profile_data';
const LANGUAGE_KEY = 'adivya_language';
const NOTIFICATION_STORAGE_KEY = 'adivya_notifications';

function loadStoredProfile() {
  const fallback = {
    language: 'en',
    basic: { name: '', dob: '', state: '', district: '' },
    education: { course: '', institution: '', year: '', level: '' },
    eligibility: { income: '', category: '', residence: '' },
    preferences: [],
    preferredLanguage: 'English'
  };

  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return fallback;
    return { ...fallback, ...JSON.parse(raw) };
  } catch (error) {
    return fallback;
  }
}

const storedProfile = loadStoredProfile();

function saveProfile(profile) {
  if (typeof localStorage !== 'undefined') {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(profile));
  }
}

function setLanguage(lang) {
  const selected = translations[lang] || translations.en;
  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const key = element.getAttribute('data-i18n');
    if (selected[key]) element.textContent = selected[key];
  });
  document.documentElement.lang = lang;
  if (typeof localStorage !== 'undefined') {
    localStorage.setItem(LANGUAGE_KEY, lang);
  }
}

function buildSmartNotificationData(profile = loadStoredProfile()) {
  const basicName = profile?.basic?.name || 'Student';
  const course = profile?.education?.course || 'your course';
  const income = profile?.eligibility?.income || 'your income band';
  const category = profile?.eligibility?.category || 'your category';
  const missingIncome = !profile?.eligibility?.income || String(profile.eligibility.income).includes('Select');
  const docsReady = Boolean(profile?.preferences?.length)
  return [
    {
      id: 'deadline-warning',
      title: 'Urgent scholarship deadline approaching',
      body: `Your ${course} scholarship action is due soon. ADIVYA recommends completing the next step today.`,
      category: 'scholarship',
      severity: 'urgent',
      time: '2h ago',
      unread: true,
      actionLabel: 'Open rescue flow',
      actionTarget: 'rescue.html'
    },
    {
      id: 'document-check',
      title: 'Document verification needed',
      body: missingIncome ? 'Your income evidence is still incomplete, which may affect need-based scholarship options.' : `Your income profile for ${income} is valid, but a final document check can improve your match score.`,
      category: 'documents',
      severity: 'high',
      time: '5h ago',
      unread: true,
      actionLabel: 'Review documents',
      actionTarget: 'documents.html'
    },
    {
      id: 'profile-progress',
      title: 'Profile progress update',
      body: `${basicName}, your profile is strong enough to unlock more opportunities. A few details can make the next matches even stronger.`,
      category: 'application',
      severity: 'normal',
      time: 'Today',
      unread: docsReady ? false : true,
      actionLabel: 'Update profile',
      actionTarget: 'profile.html'
    },
    {
      id: 'eligibility-match',
      title: 'New scholarship match found',
      body: `ADIVYA found a ${category} friendly opportunity aligned to your course and local eligibility signals.`,
      category: 'scholarship',
      severity: 'normal',
      time: 'Today',
      unread: true,
      actionLabel: 'View opportunities',
      actionTarget: 'opportunities.html'
    },
    {
      id: 'renewal-readiness',
      title: 'Renewal reminder',
      body: 'Your scholarship renewal is approaching. ADIVYA can help you prepare the next review packet without starting from scratch.',
      category: 'scholarship',
      severity: 'normal',
      time: 'Yesterday',
      unread: false,
      actionLabel: 'Prepare renewal',
      actionTarget: 'recovery.html'
    }
  ];
}

function loadNotifications() {
  try {
    const raw = JSON.parse(localStorage.getItem(NOTIFICATION_STORAGE_KEY) || 'null');
    if (Array.isArray(raw) && raw.length) {
      return raw;
    }
  } catch (error) {
    // fall through to generated defaults
  }

  const generated = [];
  localStorage.setItem(NOTIFICATION_STORAGE_KEY, JSON.stringify(generated));
  return generated;
}

function saveNotifications(list) {
  localStorage.setItem(NOTIFICATION_STORAGE_KEY, JSON.stringify(list));
}

function renderNotificationBell() {
  const badge = document.getElementById('notificationBadge');
  const panel = document.getElementById('notificationPanel');
  const notifications = loadNotifications();
  const unreadCount = notifications.filter((item) => item.unread).length;
  if (badge) {
    badge.textContent = String(unreadCount || notifications.length || 0);
    badge.style.display = unreadCount || notifications.length ? 'inline-flex' : 'none';
  }
  if (panel) {
    const list = panel.querySelector('#notificationList');
    if (list) {
      list.innerHTML = notifications.map((item) => `
        <div class="notification-item ${item.unread ? 'unread' : ''}" data-notification-id="${item.id}">
          <span class="notification-dot ${item.severity === 'urgent' ? 'urgent' : item.category === 'documents' ? 'document' : ''}"></span>
          <div class="notification-copy">
            <strong>${item.title}</strong>
            <p>${item.body}</p>
            <div class="notification-meta-row">
              <span>${item.category}</span>
              <span>${item.time}</span>
            </div>
          </div>
        </div>
      `).join('');

      list.querySelectorAll('.notification-item').forEach((row) => {
        row.addEventListener('click', () => {
          const id = row.dataset.notificationId;
          const state = loadNotifications();
          const updated = state.map((item) => (item.id === id ? { ...item, unread: false } : item));
          saveNotifications(updated);
          renderNotificationBell();
          const target = updated.find((item) => item.id === id)?.actionTarget;
          if (target) window.location.href = target;
        });
      });
    }
  }
}

function renderNotificationCenter() {
  const root = document.getElementById('notificationCenterList');
  const unreadEl = document.getElementById('notificationSummaryUnread');
  const urgentEl = document.getElementById('notificationSummaryUrgent');
  const actionsEl = document.getElementById('notificationSummaryActions');
  if (!root) return;

  const notifications = loadNotifications();
  const unreadCount = notifications.filter((n) => n.unread).length;
  const urgentCount = notifications.filter((n) => n.severity === 'urgent').length;
  const actionsCount = notifications.filter((n) => n.actionTarget).length;

  if (unreadEl) unreadEl.textContent = String(unreadCount);
  if (urgentEl) urgentEl.textContent = String(urgentCount);
  if (actionsEl) actionsEl.textContent = String(actionsCount);

  if (!notifications.length) {
    root.innerHTML = `
      <div class="empty-state card">
        <h3>You’re all caught up.</h3>
        <p>ADIVYA will show a notification here when something important happens in your scholarship journey.</p>
      </div>
    `;
    return;
  }

  const currentFilter = document.querySelector('.filter-chip.active')?.dataset.filter || 'all';
  const filtered = notifications.filter((item) => {
    if (currentFilter === 'all') return true;
    if (currentFilter === 'urgent') return item.severity === 'urgent';
    if (currentFilter === 'documents') return item.category === 'documents';
    if (currentFilter === 'application') return item.category === 'application';
    if (currentFilter === 'scholarship') return item.category === 'scholarship';
    return true;
  });

  root.innerHTML = filtered.map((item) => `
    <article class="notification-center-item ${item.unread ? 'unread' : ''}" data-id="${item.id}">
      <div class="notification-center-main">
        <span class="notification-dot ${item.severity === 'urgent' ? 'urgent' : item.category === 'documents' ? 'document' : ''}"></span>
        <div>
          <div class="notification-topline">
            <h3>${item.title}</h3>
            <span class="notification-chip ${item.severity}">${item.severity === 'urgent' ? 'Urgent' : item.category}</span>
          </div>
          <p>${item.body}</p>
          <div class="notification-meta-row">
            <span>${item.time}</span>
            <span>${item.unread ? 'Unread' : 'Read'}</span>
          </div>
        </div>
      </div>
      <button type="button" class="btn btn-secondary small-btn notification-cta" data-action-target="${item.actionTarget}">${item.actionLabel}</button>
    </article>
  `).join('');

  root.querySelectorAll('.notification-cta').forEach((button) => {
    button.addEventListener('click', () => {
      const target = button.dataset.actionTarget;
      if (target) window.location.href = target;
    });
  });

  root.querySelectorAll('.notification-center-item').forEach((item) => {
    item.addEventListener('click', (event) => {
      if (event.target.closest('.notification-cta')) return;
      const id = item.dataset.id;
      const state = loadNotifications();
      const updated = state.map((notification) => notification.id === id ? { ...notification, unread: false } : notification);
      saveNotifications(updated);
      renderNotificationCenter();
      renderNotificationBell();
    });
  });
}

function bindNotificationActions() {
  const badges = document.querySelectorAll('#notificationBadge, .notification-toggle');
  badges.forEach((element) => {
    element.addEventListener('click', () => {
      const panel = document.getElementById('notificationPanel');
      if (panel) panel.classList.toggle('hidden');
    });
  });

  const close = document.getElementById('closeNotificationPanel');
  if (close) {
    close.addEventListener('click', () => {
      const panel = document.getElementById('notificationPanel');
      if (panel) panel.classList.add('hidden');
    });
  }

  const markAllReadButton = document.getElementById('markAllReadBtn');
  if (markAllReadButton) {
    markAllReadButton.addEventListener('click', () => {
      const notifications = loadNotifications().map((item) => ({ ...item, unread: false }));
      saveNotifications(notifications);
      renderNotificationCenter();
      renderNotificationBell();
    });
  }

  const refreshButton = document.getElementById('refreshNotificationsBtn');
  if (refreshButton) {
    refreshButton.addEventListener('click', () => {
      const current = loadNotifications();
      const refreshed = buildSmartNotificationData(loadStoredProfile()).map((item) => {
        const match = current.find((entry) => entry.id === item.id);
        return { ...item, unread: match ? match.unread : item.unread };
      });
      saveNotifications(refreshed);
      renderNotificationCenter();
      renderNotificationBell();
    });
  }

  document.querySelectorAll('.filter-chip').forEach((chip) => {
    chip.addEventListener('click', () => {
      document.querySelectorAll('.filter-chip').forEach((item) => item.classList.toggle('active', item === chip));
      renderNotificationCenter();
    });
  });

  const dashboardBack = document.getElementById('backToDashboardBtn');
  if (dashboardBack) {
    dashboardBack.addEventListener('click', () => {
      window.location.href = 'dashboard.html';
    });
  }
}

function ensureNotificationNavigation() {
  document.querySelectorAll('.nav-item, .mobile-item').forEach((button) => {
    button.addEventListener('click', () => {
      const target = button.dataset.nav;
      if (target === 'notifications') {
        window.location.href = 'notifications.html';
      }
    });
  });

  const bellButton = document.querySelector('.notification-toggle');
  if (bellButton && !window.location.pathname.endsWith('notifications.html')) {
    bellButton.addEventListener('click', () => {
      window.location.href = 'notifications.html';
    });
  }
}

if (window.location.pathname.endsWith('notifications.html')) {
  bindNotificationActions();
  renderNotificationCenter();
}

if (!window.location.pathname.endsWith('notifications.html')) {
  renderNotificationBell();
  ensureNotificationNavigation();
}

const languageSelect = document.getElementById('languageSelect');
if (languageSelect) {
  const savedLang = localStorage.getItem(LANGUAGE_KEY) || storedProfile.language || 'en';
  languageSelect.value = savedLang;
  languageSelect.addEventListener('change', (event) => {
    const nextLang = event.target.value;
    storedProfile.language = nextLang;
    saveProfile(storedProfile);
    setLanguage(nextLang);
  });
}

function showView(name) {
  const cards = document.querySelectorAll('.auth-card.view');
  cards.forEach((card) => {
    const shouldShow = card.dataset.view === name;
    card.classList.toggle('active', shouldShow);
    card.classList.toggle('hidden', !shouldShow);
  });
}

const routeActions = {
  'show-signup': 'signup',
  'show-login': 'login',
  'forgot-password': 'recovery',
  'otp': 'otp',
  'google': 'profile',
  'show-dashboard': 'dashboard'
};

document.querySelectorAll('[data-action]').forEach((button) => {
  button.addEventListener('click', () => {
    const action = button.dataset.action;
    if (action in routeActions) {
      const nextView = routeActions[action];
      if (nextView === 'dashboard') {
        window.location.href = 'dashboard.html';
      } else {
        showView(nextView);
      }
    }
  });
});

document.querySelectorAll('.auth-form').forEach((form) => {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const formType = form.dataset.form;

    if (formType === 'login') {
      window.location.href = 'dashboard.html';
      return;
    }

    if (formType === 'signup') {
      window.location.href = 'profile.html';
      return;
    }

    if (formType === 'otp') {
      window.location.href = 'dashboard.html';
      return;
    }

    if (formType === 'recovery') {
      showView('login');
      return;
    }

    if (formType === 'profile') {
      window.location.href = 'dashboard.html';
    }
  });
});

const initialView = document.body.dataset.view || 'login';
showView(initialView);
setLanguage(languageSelect ? languageSelect.value : 'en');

if (window.location.pathname.endsWith('profile.html')) {
  const PROFILE_STORAGE_KEY = 'adivya_profile_data';
  const profile = JSON.parse(localStorage.getItem(PROFILE_STORAGE_KEY) || '{}');
  const currentState = {
    language: profile.language || 'en',
    basic: profile.basic || { name: '', dob: '', state: '', district: '' },
    education: profile.education || { course: '', institution: '', year: '', level: '' },
    eligibility: profile.eligibility || { income: '', category: '', residence: '' },
    preferences: profile.preferences || [],
    preferredLanguage: profile.preferredLanguage || 'English'
  };

  const stepPanels = Array.from(document.querySelectorAll('.step-panel'));
  const stepIndicators = Array.from(document.querySelectorAll('.progress-dot'));
  const stepLabelEls = Array.from(document.querySelectorAll('.progress-label'));
  const completionText = document.querySelector('.completion-percent');
  const resultStatus = document.querySelector('.result-status');
  const nextButton = document.querySelector('.profile-next');
  const backButton = document.querySelector('.profile-back');
  let currentStep = 0;

  function normalizeValue(value) {
    return typeof value === 'string' ? value.trim() : value;
  }

  function toNumberOfCompletedFields() {
    const totalFields = [
      currentState.basic.name,
      currentState.basic.dob,
      currentState.basic.state,
      currentState.basic.district,
      currentState.education.course,
      currentState.education.institution,
      currentState.education.year,
      currentState.education.level,
      currentState.eligibility.income,
      currentState.eligibility.category,
      currentState.eligibility.residence,
      currentState.preferences.length > 0 ? 'selected' : ''
    ];
    return totalFields.filter((value) => normalizeValue(value) !== '').length;
  }

  function updateProfileProgress() {
    const completed = toNumberOfCompletedFields();
    const total = 12;
    const percent = Math.round((completed / total) * 100);
    const statusBadge = document.querySelector('.status-badge');
    const safeText = percent >= 100 ? 'Profile Ready ✓' : `Profile completion: ${percent}%`;

    if (completionText) completionText.textContent = safeText;
    if (statusBadge && !completionText) statusBadge.textContent = safeText;
    if (resultStatus) {
      resultStatus.textContent = percent >= 100 ? 'Profile Ready ✓' : 'Complete your profile';
    }

    const activeStep = Math.min(currentStep + 1, 4);
    stepIndicators.forEach((dot, index) => {
      dot.classList.toggle('active', index <= currentStep);
      dot.classList.toggle('done', index < currentStep);
    });
    stepLabelEls.forEach((label, index) => {
      label.classList.toggle('active', index === currentStep);
    });
    const stepText = document.querySelector('.step-indicator-text');
    if (stepText) {
      stepText.textContent = `Step ${activeStep} of 4`;
    }
    if (document.querySelector('.step-counter')) {
      document.querySelector('.step-counter').textContent = `Step ${activeStep} of 4`;
    }
  }

  function updateStateFromFields() {
    const form = document.querySelector('[data-step="1"]');
    if (!form) return;
    currentState.basic.name = form.querySelector('[name="fullName"]').value;
    currentState.basic.dob = form.querySelector('[name="dob"]').value;
    currentState.basic.state = form.querySelector('[name="state"]').value;
    currentState.basic.district = form.querySelector('[name="district"]').value;

    const edu = document.querySelector('[data-step="2"]');
    if (edu) {
      currentState.education.course = edu.querySelector('[name="course"]').value;
      currentState.education.institution = edu.querySelector('[name="institution"]').value;
      currentState.education.year = edu.querySelector('[name="year"]').value;
      currentState.education.level = edu.querySelector('input[name="educationLevel"]:checked')?.value || '';
    }

    const elig = document.querySelector('[data-step="3"]');
    if (elig) {
      currentState.eligibility.income = elig.querySelector('[name="incomeRange"]').value;
      currentState.eligibility.category = elig.querySelector('[name="studentCategory"]').value;
      currentState.eligibility.residence = elig.querySelector('[name="residenceState"]').value;
    }

    const pref = document.querySelector('[data-step="4"]');
    if (pref) {
      const selected = Array.from(pref.querySelectorAll('.preference-card.selected')).map((card) => card.dataset.preference);
      currentState.preferences = selected;
    }

    const langCards = Array.from(document.querySelectorAll('.language-card.selected'));
    if (langCards.length) {
      currentState.preferredLanguage = langCards[0].dataset.language || 'English';
    }

    saveProfile(currentState);
    updateProfileProgress();
  }

  function validateCurrentStep() {
    const currentPanel = stepPanels[currentStep];
    if (!currentPanel) return true;

    if (currentStep === 0) {
      const required = [
        currentPanel.querySelector('[name="fullName"]').value,
        currentPanel.querySelector('[name="dob"]').value,
        currentPanel.querySelector('[name="state"]').value,
        currentPanel.querySelector('[name="district"]').value
      ];
      return required.every((value) => value.trim() !== '');
    }

    if (currentStep === 1) {
      const required = [
        currentPanel.querySelector('[name="course"]').value,
        currentPanel.querySelector('[name="institution"]').value,
        currentPanel.querySelector('[name="year"]').value,
        currentPanel.querySelector('input[name="educationLevel"]:checked')?.value
      ];
      return required.every((value) => value && value.trim() !== '');
    }

    if (currentStep === 2) {
      const required = [
        currentPanel.querySelector('[name="incomeRange"]').value,
        currentPanel.querySelector('[name="studentCategory"]').value,
        currentPanel.querySelector('[name="residenceState"]').value
      ];
      return required.every((value) => value && value.trim() !== '');
    }

    return currentState.preferences.length > 0;
  }

  function renderStep() {
    stepPanels.forEach((panel, index) => {
      panel.classList.toggle('active', index === currentStep);
      panel.classList.toggle('hidden', index !== currentStep);
    });

    const stepCounter = document.querySelector('.step-counter');
    if (stepCounter) stepCounter.textContent = `Step ${currentStep + 1} of 4`;

    backButton.style.visibility = currentStep === 0 ? 'hidden' : 'visible';
    nextButton.textContent = currentStep === 3 ? 'Build My ADIVYA Profile →' : 'Continue →';
    updateProfileProgress();
  }

  function persistFormValues() {
    const stepOne = document.querySelector('[data-step="1"]');
    if (stepOne) {
      stepOne.querySelector('[name="fullName"]').value = currentState.basic.name || '';
      stepOne.querySelector('[name="dob"]').value = currentState.basic.dob || '';
      stepOne.querySelector('[name="state"]').value = currentState.basic.state || '';
      stepOne.querySelector('[name="district"]').value = currentState.basic.district || '';
    }

    const stepTwo = document.querySelector('[data-step="2"]');
    if (stepTwo) {
      stepTwo.querySelector('[name="course"]').value = currentState.education.course || '';
      stepTwo.querySelector('[name="institution"]').value = currentState.education.institution || '';
      stepTwo.querySelector('[name="year"]').value = currentState.education.year || '';
      const radioValue = currentState.education.level;
      if (radioValue) {
        const radioInput = stepTwo.querySelector(`input[value="${radioValue}"]`);
        if (radioInput) radioInput.checked = true;
      }
    }

    const stepThree = document.querySelector('[data-step="3"]');
    if (stepThree) {
      stepThree.querySelector('[name="incomeRange"]').value = currentState.eligibility.income || '';
      stepThree.querySelector('[name="studentCategory"]').value = currentState.eligibility.category || '';
      stepThree.querySelector('[name="residenceState"]').value = currentState.eligibility.residence || '';
    }

    const stepFour = document.querySelector('[data-step="4"]');
    if (stepFour) {
      const prefCards = stepFour.querySelectorAll('.preference-card');
      prefCards.forEach((card) => {
        const isSelected = currentState.preferences.includes(card.dataset.preference);
        card.classList.toggle('selected', isSelected);
      });
      const selectedLangCard = stepFour.querySelector(`.language-card[data-language="${currentState.preferredLanguage || 'English'}"]`);
      if (selectedLangCard) {
        stepFour.querySelectorAll('.language-card').forEach((card) => card.classList.toggle('selected', card === selectedLangCard));
      }
    }
  }

  stepPanels.forEach((panel) => {
    panel.addEventListener('change', updateStateFromFields);
    panel.addEventListener('input', updateStateFromFields);
  });

  document.querySelectorAll('.preference-card').forEach((card) => {
    card.addEventListener('click', () => {
      card.classList.toggle('selected');
      updateStateFromFields();
    });
  });

  document.querySelectorAll('.language-card').forEach((card) => {
    card.addEventListener('click', () => {
      document.querySelectorAll('.language-card').forEach((langCard) => langCard.classList.remove('selected'));
      card.classList.add('selected');
      currentState.preferredLanguage = card.dataset.language || 'English';
      const nextLang = card.dataset.languageCode || 'en';
      const targetSelect = document.querySelector('#languageSelect');
      if (targetSelect) {
        targetSelect.value = nextLang;
      }
      saveProfile(currentState);
      setLanguage(nextLang);
    });
  });

  backButton.addEventListener('click', () => {
    if (currentStep > 0) {
      currentStep -= 1;
      renderStep();
    }
  });

  nextButton.addEventListener('click', () => {
    if (!validateCurrentStep()) {
      const message = currentStep === 3 ? 'Please select at least one way ADIVYA can help.' : 'Please complete all required fields before continuing.';
      alert(message);
      return;
    }

    if (currentStep < 3) {
      currentStep += 1;
      renderStep();
      return;
    }

    const building = document.querySelector('.status-badge');
    if (building) {
      building.textContent = 'Creating your personalized scholarship profile…';
      building.classList.add('loading');
    }

    nextButton.disabled = true;
    nextButton.textContent = 'Creating your profile…';

    setTimeout(() => {
      if (building) {
        building.textContent = 'Profile Ready ✓';
        building.classList.remove('loading');
        building.classList.add('success');
      }
      setTimeout(() => {
        localStorage.setItem(PROFILE_STORAGE_KEY, JSON.stringify(currentState));
        window.location.href = 'dashboard.html';
      }, 1000);
    }, 1400);
  });

  persistFormValues();
  updateProfileProgress();
  renderStep();
}

if (window.location.pathname.endsWith('dashboard.html')) {
  const profileData = JSON.parse(localStorage.getItem('adivya_profile_data') || '{}');
  const dashboardName = document.querySelector('[data-dashboard-name]');
  const profileBadge = document.querySelector('[data-profile-badge]');
  const studentName = profileData.basic?.name || 'Student';

  if (dashboardName) {
    dashboardName.textContent = studentName;
  }

  if (profileBadge) {
    const course = profileData.education?.course || 'Student';
    profileBadge.textContent = `${course} • ${profileData.eligibility?.residence || 'India'}`;
  }
}

if (window.location.pathname.endsWith('dashboard.html')) {
  const PROFILE_STORAGE_KEY = 'adivya_profile_data';
  const LANGUAGE_KEY = 'adivya_language';
  const defaultProfile = {
    language: 'en',
    basic: { name: '', dob: '', state: '', district: '' },
    education: { course: '', institution: '', year: '', level: '' },
    eligibility: { income: '', category: '', residence: '' },
    preferences: [],
    preferredLanguage: 'English'
  };

  function loadProfile() {
    try {
      const raw = JSON.parse(localStorage.getItem(PROFILE_STORAGE_KEY) || 'null');
      if (!raw) return defaultProfile;
      return {
        ...defaultProfile,
        ...raw,
        basic: { ...defaultProfile.basic, ...(raw.basic || {}) },
        education: { ...defaultProfile.education, ...(raw.education || {}) },
        eligibility: { ...defaultProfile.eligibility, ...(raw.eligibility || {}) }
      };
    } catch (error) {
      return defaultProfile;
    }
  }

  function getDashboardText(key, currentLanguage = 'en') {
    const translations = {
      en: {
        welcomeLabel: 'Welcome back',
        welcomeSubtitle: 'Here’s what’s happening with your scholarship journey today.',
        profileCompletion: 'PROFILE COMPLETION',
        nextBestAction: '🎯 YOUR NEXT BEST ACTION',
        whyMatters: 'Why this matters',
        opportunityHeading: '🎯 SCHOLARSHIP OPPORTUNITIES',
        readinessHeading: '🛡️ APPLICATION READINESS',
        deadlinesHeading: '🚨 URGENT DEADLINES',
        documentsHeading: '🔐 DOCUMENT READINESS',
        journeyHeading: '🌱 MY SCHOLARSHIP JOURNEY',
        courseLabel: 'Course',
        institutionLabel: 'Institution',
        yearLabel: 'Year',
        locationLabel: 'Location',
        alertsTitle: 'ADIVYA Notifications'
      },
      te: {
        welcomeLabel: 'వెల్కమ్ బ్యాక్',
        welcomeSubtitle: 'మీ స్కాలర్షిప్ ప్రయాణంలో ఈ రోజు ఏమి జరుగుతోందో చూద్దాం.',
        profileCompletion: 'ప్రొఫైల్ పూర్త율',
        nextBestAction: '🎯 మీ అతి ముఖ్యమైన చర్య',
        whyMatters: 'ఇది ఎందుకు ముఖ్యమైనది',
        opportunityHeading: '🎯 స్కాలర్షిప్ అవకాశాలు',
        readinessHeading: '🛡️ అప్లికేషన్ తయారీ',
        deadlinesHeading: '🚨 అత్యవసర డెడ్లైన్లు',
        documentsHeading: '🔐 పత్ర సిద్ధం',
        journeyHeading: '🌱 నా స్కాలర్షిప్ ప్రయాణం',
        courseLabel: 'కోర్సు',
        institutionLabel: 'సంస్థ',
        yearLabel: 'సంవత్సరం',
        locationLabel: 'స్థానం',
        alertsTitle: 'ADIVYA నోటిఫికేషన్స్'
      },
      hi: {
        welcomeLabel: 'वापसी पर स्वागत है',
        welcomeSubtitle: 'आज आपकी छात्रवृत्ति यात्रा में क्या चल रहा है, देखें।',
        profileCompletion: 'प्रोफ़ाइल पूर्णता',
        nextBestAction: '🎯 आपकी अगली सबसे महत्वपूर्ण कार्रवाई',
        whyMatters: 'इसका महत्व',
        opportunityHeading: '🎯 छात्रवृत्ति अवसर',
        readinessHeading: '🛡️ आवेदन तैयारी',
        deadlinesHeading: '🚨 गंभीर समय सीमा',
        documentsHeading: '🔐 दस्तावेज़ तैयारी',
        journeyHeading: '🌱 मेरी छात्रवृत्ति यात्रा',
        courseLabel: 'कोर्स',
        institutionLabel: 'संस्था',
        yearLabel: 'वर्ष',
        locationLabel: 'स्थान',
        alertsTitle: 'ADIVYA सूचनाएँ'
      }
    };

    return translations[currentLanguage] && translations[currentLanguage][key] ? translations[currentLanguage][key] : translations.en[key] || key;
  }

  function updateLanguageUI(language) {
    const translatable = document.querySelectorAll('[data-i18n]');
    translatable.forEach((element) => {
      const key = element.getAttribute('data-i18n');
      if (key && getDashboardText(key, language)) {
        element.textContent = getDashboardText(key, language);
      }
    });

    const welcomeName = document.getElementById('welcomeName');
    const profile = loadProfile();
    const studentName = profile.basic.name || 'Student';
    if (welcomeName) {
      welcomeName.textContent = `${getDashboardText('welcomeLabel', language)}, ${studentName} 👋`;
    }

    const selected = document.getElementById('dashboardLanguage');
    if (selected) selected.value = language;
    localStorage.setItem(LANGUAGE_KEY, language);
  }

  function computeProfileCompletion(profile) {
    const hasAnyValue = Object.values(profile.basic || {}).some((value) => value && String(value).trim()) ||
      Object.values(profile.education || {}).some((value) => value && String(value).trim()) ||
      Object.values(profile.eligibility || {}).some((value) => value && String(value).trim()) ||
      (profile.preferences && profile.preferences.length > 0);

    if (!hasAnyValue) return 0;

    const fields = [
      profile.basic.name,
      profile.basic.dob,
      profile.basic.state,
      profile.basic.district,
      profile.education.course,
      profile.education.institution,
      profile.education.year,
      profile.education.level,
      profile.eligibility.income,
      profile.eligibility.category,
      profile.eligibility.residence,
      profile.preferences && profile.preferences.length ? 'selected' : ''
    ];

    const complete = fields.filter((value) => value && String(value).trim() !== '').length;
    return Math.min(100, Math.round((complete / fields.length) * 100));
  }

  function buildScholarships(profile) {
    const hasProfile = [
      profile.basic.name,
      profile.education.course,
      profile.education.institution,
      profile.eligibility.income,
      profile.eligibility.category,
      profile.eligibility.residence
    ].some((value) => value && String(value).trim());

    if (!hasProfile) return [];

    return [];
  }

  function generateNotifications(profile) {
    const notifications = [];
    const completion = computeProfileCompletion(profile);

    if (!completion) {
      return [];
    }

    if (completion < 100) {
      notifications.push('Complete your scholarship profile to unlock personalized recommendations.');
    }

    if (profile.eligibility.income) {
      notifications.push('Your income information has been saved. You can review it when ready.');
    }

    return notifications.slice(0, 2);
  }

  function renderNotifications(profile) {
    const notificationList = document.getElementById('notificationList');
    const badge = document.getElementById('notificationBadge');
    const items = generateNotifications(profile);
    if (notificationList) {
      if (!items.length) {
        notificationList.innerHTML = '<div class="notification-item"><span>🎯 You\'re all caught up.</span></div>';
      } else {
        notificationList.innerHTML = items.map((message) => `
          <div class="notification-item">🔔 <span>${message}</span></div>
        `).join('');
      }
    }
    if (badge) {
      badge.textContent = String(items.length);
      badge.style.display = items.length ? 'inline-flex' : 'none';
    }
  }

  function renderOpportunityCards(profile) {
    const grid = document.getElementById('opportunityGrid');
    if (!grid) return;

    const opportunities = buildScholarships(profile);
    if (!opportunities.length) {
      grid.innerHTML = `
        <div class="empty-state card">
          <h3>No personalized opportunities yet.</h3>
          <p>Complete your profile to discover scholarships that match your information.</p>
          <button type="button" class="btn btn-primary" id="emptyProfileOpportunityBtn">Complete Profile</button>
        </div>
      `;
      document.getElementById('emptyProfileOpportunityBtn')?.addEventListener('click', () => window.location.href = 'profile.html');
      return;
    }

    grid.innerHTML = opportunities.map((item, index) => `
      <article class="scholarship-card">
        <div class="scholarship-topline">
          <span class="badge-pill">${index === 0 ? 'MERIT' : index === 1 ? 'MATCH' : 'DOC'}</span>
          <span class="match-score">${item.match}% Match</span>
        </div>
        <h3>${item.name}</h3>
        <p class="deadline">Deadline: ${item.deadline}</p>
        <p class="docs">${item.docs}</p>
        <div class="status-row">
          <span>${item.status}</span>
          <button type="button" class="btn btn-secondary small-btn view-opportunity">View Opportunity →</button>
        </div>
        <button type="button" class="match-explain" data-explanation="${item.reason}">Why do I match?</button>
      </article>
    `).join('');

    const matchButtons = grid.querySelectorAll('.match-explain');
    matchButtons.forEach((button) => {
      button.addEventListener('click', () => {
        const ai = document.getElementById('aiPanel');
        const response = document.getElementById('aiResponse');
        const text = button.dataset.explanation || 'Your profile matches because ADIVYA evaluates course fit, eligibility signals, and document readiness.';
        if (response) response.textContent = text;
        if (ai) ai.classList.remove('hidden');
      });
    });
  }

  function renderDeadlineList(profile) {
    const list = document.getElementById('deadlineList');
    if (!list) return;

    const completion = computeProfileCompletion(profile);
    if (!completion) {
      list.innerHTML = '<div class="empty-state compact"><p>No deadlines to track yet.</p><small>Complete your profile to get started.</small></div>';
      return;
    }

    list.innerHTML = '<div class="empty-state compact"><p>No deadlines added yet.</p><small>Your scholarship timeline will appear here after you start an application.</small></div>';
  }

  function renderDocuments(profile) {
    const list = document.getElementById('documentList');
    const statusText = document.getElementById('documentStatusText');
    if (!list) return;

    const total = 0;
    const docs = [];

    if (computeProfileCompletion(profile) === 0) {
      list.innerHTML = '<li class="document-item warning"><span>•</span><span>No documents added yet.</span></li>';
      if (statusText) statusText.textContent = 'No documents added yet';
      return;
    }

    list.innerHTML = docs.map((item, index) => `
      <li class="document-item ${index < total ? 'done' : 'warning'}">
        <span>${index < total ? '✓' : '⚠'}</span>
        <span>${item}</span>
      </li>
    `).join('');

    if (statusText) {
      statusText.textContent = 'No documents added yet';
    }
  }

  function renderJourney(profile) {
    const steps = document.querySelectorAll('.tree-step');
    const completion = computeProfileCompletion(profile);
    const activeIndex = completion >= 90 ? 4 : completion >= 70 ? 3 : completion >= 55 ? 2 : completion >= 30 ? 1 : 0;

    steps.forEach((step, index) => {
      step.classList.toggle('active', index <= activeIndex);
      step.classList.toggle('completed', index < activeIndex);
    });
  }

  function renderDashboard(profile) {
    const studentName = profile.basic.name || 'Student';
    const course = profile.education.course || 'Course not added yet';
    const institution = profile.education.institution || 'Institution not added yet';
    const year = profile.education.year || 'Year not added yet';
    const location = profile.eligibility.residence || profile.basic.state || 'Location not added yet';

    const completion = computeProfileCompletion(profile);
    document.getElementById('welcomeName').textContent = completion ? `Welcome back, ${studentName} 👋` : 'Welcome to ADIVYA';
    document.getElementById('summaryCourse').textContent = completion ? course : 'Course';
    document.getElementById('summaryInstitution').textContent = completion ? institution : 'Institution';
    document.getElementById('summaryYear').textContent = completion ? year : 'Year';
    document.getElementById('summaryLocation').textContent = completion ? location : 'Location';

    const ring = document.getElementById('profileProgressRing');
    const completionValue = document.getElementById('profileCompletionValue');
    const completionText = document.getElementById('profileCompletionText');
    const readinessValue = document.getElementById('readinessValue');

    if (ring) ring.style.setProperty('--progress', String(completion));
    if (completionValue) completionValue.textContent = `${completion}%`;
    if (completionText) completionText.textContent = completion ? 'Complete your profile to improve personalized matching.' : 'Your scholarship journey starts here.';
    if (readinessValue) readinessValue.textContent = completion ? `${Math.max(0, completion)}% READY` : 'Profile Required';

    const nextTitle = document.getElementById('nextActionTitle');
    const nextReason = document.getElementById('nextActionReason');
    if (!completion) {
      nextTitle.textContent = 'Complete your profile';
      nextReason.textContent = 'ADIVYA needs your information before it can suggest relevant scholarships.';
    } else if (completion < 100) {
      nextTitle.textContent = 'Add the rest of your details';
      nextReason.textContent = 'A more complete profile helps ADIVYA tailor scholarship suggestions around your actual information.';
    } else {
      nextTitle.textContent = 'Review your profile';
      nextReason.textContent = 'Your information is saved. Review and update it any time.';
    }

    const strong = document.getElementById('strongMatchesChip');
    const verification = document.getElementById('verificationChip');
    const low = document.getElementById('lowConfidenceChip');
    const opportunitiesFound = document.getElementById('opportunitiesFound');
    if (strong) strong.textContent = completion ? 'Personalized matches will appear here' : 'No matches yet';
    if (verification) verification.textContent = 'Waiting for profile data';
    if (low) low.textContent = '0 low confidence';
    if (opportunitiesFound) opportunitiesFound.textContent = completion ? 'Personalized opportunities' : 'No personalized opportunities yet';

    renderOpportunityCards(profile);
    renderDeadlineList(profile);
    renderDocuments(profile);
    renderJourney(profile);
    renderNotifications(profile);

    const profileBadge = document.querySelector('.notification-badge');
    if (profileBadge) profileBadge.style.display = 'inline-flex';
  }

  const selectedLanguage = localStorage.getItem(LANGUAGE_KEY) || 'en';
  const dashboardLanguage = document.getElementById('dashboardLanguage');
  if (dashboardLanguage) {
    dashboardLanguage.value = selectedLanguage;
    dashboardLanguage.addEventListener('change', (event) => updateLanguageUI(event.target.value));
  }

  const profile = loadProfile();
  renderDashboard(profile);
  updateLanguageUI(selectedLanguage);

  document.getElementById('profileEditButton')?.addEventListener('click', () => {
    window.location.href = 'profile.html';
  });

  document.getElementById('logoutButton')?.addEventListener('click', () => {
    localStorage.removeItem(PROFILE_STORAGE_KEY);
    window.location.href = 'login.html';
  });

  document.getElementById('completeProfileBtn')?.addEventListener('click', () => {
    window.location.href = 'profile.html';
  });

  document.getElementById('nextActionButton')?.addEventListener('click', () => {
    const target = document.getElementById('opportunityGrid');
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });

  document.getElementById('healthCheckButton')?.addEventListener('click', () => {
    const ai = document.getElementById('aiPanel');
    const response = document.getElementById('aiResponse');
    if (response) response.textContent = 'Eligibility is strong. The main risk is document completion and one verification step. Complete the missing income certificate and your risk score will improve.';
    if (ai) ai.classList.remove('hidden');
  });

  document.getElementById('manageDocumentsButton')?.addEventListener('click', () => {
    window.location.href = 'documents.html';
  });

  document.getElementById('notificationBadge')?.addEventListener('click', () => {
    const panel = document.getElementById('notificationPanel');
    if (panel) panel.classList.toggle('hidden');
  });

  document.querySelector('.notification-toggle')?.addEventListener('click', () => {
    const panel = document.getElementById('notificationPanel');
    if (panel) panel.classList.toggle('hidden');
  });

  document.getElementById('closeNotificationPanel')?.addEventListener('click', () => {
    const panel = document.getElementById('notificationPanel');
    if (panel) panel.classList.add('hidden');
  });

  document.getElementById('aiAssistantToggle')?.addEventListener('click', () => {
    const panel = document.getElementById('aiPanel');
    if (panel) panel.classList.toggle('hidden');
  });

  document.getElementById('closeAiPanel')?.addEventListener('click', () => {
    const panel = document.getElementById('aiPanel');
    if (panel) panel.classList.add('hidden');
  });

  document.querySelectorAll('.ai-question').forEach((button) => {
    button.addEventListener('click', () => {
      const response = document.getElementById('aiResponse');
      const question = button.dataset.question || 'What should I do today?';
      const answerMap = {
        'What should I do today?': 'Complete the income certificate and review the strongest scholarship match. Your current profile is strong enough to act now.',
        'Why do I match?': 'You match because your academic course, category, and income profile align closely with the award criteria and document readiness.',
        'What documents are missing?': 'The remaining gap is your income or category certificate. Upload it to unlock the next scholarship cycle.',
        'Which deadline is closest?': 'The Engineering Excellence Grant closes in 5 days. ADIVYA recommends acting on it immediately.',
        'Am I eligible?': 'You are eligible for the most relevant opportunities based on your course, location, and profile strength. A few documents still need confirmation.'
      };
      if (response) response.textContent = answerMap[question] || 'Your profile is progressing well. Focus on the strongest scholarship match and complete the remaining document checklist.';
    });
  });

  document.querySelectorAll('.nav-item, .mobile-item').forEach((nav) => {
    nav.addEventListener('click', () => {
      const target = nav.dataset.nav;
      document.querySelectorAll('.nav-item').forEach((item) => item.classList.toggle('active', item === nav));
      document.querySelectorAll('.mobile-item').forEach((item) => item.classList.toggle('active', item === nav));
      if (target === 'dashboard') {
        window.location.href = 'dashboard.html';
      }
      if (target === 'opportunities') {
        if (window.location.pathname.endsWith('dashboard.html')) {
          window.location.href = 'opportunities.html';
        } else {
          document.getElementById('scholarshipList')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
      if (target === 'journey') {
        document.getElementById('journeyTree')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      if (target === 'documents') {
        document.querySelector('.documents-card')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      if (target === 'profile') {
        window.location.href = 'profile.html';
      }
      if (target === 'home') {
        window.location.href = 'index.html';
      }
    });
  });

  document.querySelectorAll('.quick-action').forEach((button) => {
    button.addEventListener('click', () => {
      const target = button.dataset.target;
      if (target === 'opportunities') {
        document.getElementById('opportunityGrid')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      if (target === 'documents') {
        document.querySelector('.documents-card')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      if (target === 'readiness') {
        const ai = document.getElementById('aiPanel');
        const response = document.getElementById('aiResponse');
        if (response) response.textContent = 'Your application is healthy. The biggest boost comes from completing the missing income certificate and confirming the category document.';
        if (ai) ai.classList.remove('hidden');
      }
      if (target === 'journey') {
        document.getElementById('journeyTree')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  if (window.SpeechRecognition || window.webkitSpeechRecognition) {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = 'en-IN';
    document.querySelector('.notification-toggle')?.addEventListener('click', () => {
      recognition.start();
    });
    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      const response = document.getElementById('aiResponse');
      if (response) {
        response.textContent = `Voice input received: “${transcript}”. ADIVYA suggests reviewing your strongest scholarship opportunity and uploading the remaining document.`;
      }
    };
  }
}

if (window.location.pathname.endsWith('opportunities.html')) {
  const PROFILE_STORAGE_KEY = 'adivya_profile_data';
  const SAVED_OPPORTUNITIES_KEY = 'adivya_saved_opportunities';
  const LANGUAGE_KEY = 'adivya_language';

  const scholarshipDataset = [
    {
      id: 'eng-excellence',
      name: 'Engineering Excellence Grant',
      provider: 'Telangana Education Foundation',
      amount: 50000,
      deadline: '2026-10-12',
      eligibleCourses: ['B.Tech', 'B.Sc', 'B.E.'],
      eligibleLevels: ['Undergraduate', 'Postgraduate'],
      incomeLimit: 300000,
      locations: ['Telangana', 'Andhra Pradesh', 'Karnataka'],
      categories: ['General', 'OBC', 'SC', 'ST', 'EWS'],
      requiredDocuments: ['Aadhaar', 'Marks Memo', 'Income Certificate'],
      description: 'Supports engineering and technology students with strong academic performance and need-based support.',
      applicationProcess: 'Submit the online form, upload proof of course enrollment, and confirm documents in TrustVault.',
      timeline: 'Application opens 2 weeks before the deadline. Review and verification occur within 10 days.',
      status: 'strong',
      tag: 'HIGH MATCH'
    },
    {
      id: 'inclusive-growth',
      name: 'Inclusive Growth Scholarship',
      provider: 'National Student Support Council',
      amount: 75000,
      deadline: '2026-10-05',
      eligibleCourses: ['B.Tech', 'B.Com', 'B.A.', 'B.Sc'],
      eligibleLevels: ['Undergraduate'],
      incomeLimit: 250000,
      locations: ['Telangana', 'Tamil Nadu', 'Maharashtra'],
      categories: ['OBC', 'SC', 'ST', 'EWS'],
      requiredDocuments: ['Income Certificate', 'Caste Certificate', 'Institution Certificate'],
      description: 'Designed for students from economically disadvantaged sections to pursue higher studies without financial barriers.',
      applicationProcess: 'Verify your category and income documents in TrustVault, then complete the application checklist.',
      timeline: 'Shortlist happens within 7 days of submission and document review takes 14 days.',
      status: 'strong',
      tag: 'STRONG MATCH'
    },
    {
      id: 'research-innovation',
      name: 'Innovation Research Fellowship',
      provider: 'FutureLab Foundation',
      amount: 120000,
      deadline: '2026-10-18',
      eligibleCourses: ['B.Tech', 'M.Tech', 'B.Sc'],
      eligibleLevels: ['Undergraduate', 'Postgraduate'],
      incomeLimit: 400000,
      locations: ['Telangana', 'Karnataka', 'Delhi'],
      categories: ['General', 'EWS', 'OBC'],
      requiredDocuments: ['Research Proposal', 'Marks Memo', 'Aadhaar'],
      description: 'Supports research-driven students with a strong academic record and project interest in innovation hubs.',
      applicationProcess: 'Submit a short research abstract and upload proof of academic record before the deadline.',
      timeline: 'Review starts after the submission date and shortlisted candidates receive a call within 2 weeks.',
      status: 'verification',
      tag: 'NEEDS VERIFICATION'
    },
    {
      id: 'future-talent',
      name: 'Future Talent Grant',
      provider: 'Nirmaan Education Trust',
      amount: 90000,
      deadline: '2026-10-08',
      eligibleCourses: ['B.Tech', 'B.Com', 'B.A.', 'B.Sc'],
      eligibleLevels: ['Undergraduate'],
      incomeLimit: 180000,
      locations: ['Telangana', 'Andhra Pradesh', 'Delhi'],
      categories: ['General', 'EWS', 'OBC', 'SC', 'ST'],
      requiredDocuments: ['Income Certificate', 'Marks Memo', 'Bank Details'],
      description: 'A need-backed educational support grant for students seeking a smoother path through their degree program.',
      applicationProcess: 'Review the checklist, update the missing document and complete the scholarship form.',
      timeline: 'Applications close soon; the selection process begins immediately after the deadline.',
      status: 'deadline',
      tag: 'DEADLINE SOON'
    },
    {
      id: 'women-mentor',
      name: 'Women Mentor Scholarship',
      provider: 'SheNurture Foundation',
      amount: 60000,
      deadline: '2026-10-22',
      eligibleCourses: ['B.Tech', 'B.A.', 'B.Com', 'B.Sc'],
      eligibleLevels: ['Undergraduate'],
      incomeLimit: 500000,
      locations: ['Telangana', 'Karnataka', 'Tamil Nadu'],
      categories: ['General', 'OBC', 'EWS'],
      requiredDocuments: ['Aadhaar', 'Marks Memo', 'Income Certificate'],
      description: 'Encourages women students to continue higher education and complete degree milestones.',
      applicationProcess: 'Use TrustVault to validate identity and income details, then complete the form with a mentor reference.',
      timeline: 'Review stage starts after final submission and awards are announced within 3 weeks.',
      status: 'docs',
      tag: 'DOCUMENT REQUIRED'
    }
  ];

  function loadProfile() {
    try {
      const raw = JSON.parse(localStorage.getItem(PROFILE_STORAGE_KEY) || 'null');
      const fallback = {
        basic: { name: 'Student', state: 'India' },
        education: { course: 'B.Tech', institution: 'Your Institution', year: '2nd Year', level: 'Undergraduate' },
        eligibility: { income: '₹1 – ₹3 LPA', category: 'General', residence: 'India' },
        preferences: []
      };
      if (!raw) return fallback;
      return {
        ...fallback,
        ...raw,
        basic: { ...fallback.basic, ...(raw.basic || {}) },
        education: { ...fallback.education, ...(raw.education || {}) },
        eligibility: { ...fallback.eligibility, ...(raw.eligibility || {}) }
      };
    } catch (error) {
      return {
        basic: { name: 'Student', state: 'India' },
        education: { course: 'B.Tech', institution: 'Your Institution', year: '2nd Year', level: 'Undergraduate' },
        eligibility: { income: '₹1 – ₹3 LPA', category: 'General', residence: 'India' },
        preferences: []
      };
    }
  }

  function moneyToNumber(value) {
    if (!value) return 0;
    const cleaned = String(value).replace(/[^0-9]/g, '');
    return Number(cleaned || 0);
  }

  function parseDate(value) {
    const date = new Date(value);
    return Number.isNaN(date.getTime()) ? null : date;
  }

  function daysRemaining(deadlineValue) {
    const deadline = parseDate(deadlineValue);
    if (!deadline) return 30;
    const now = new Date();
    const diff = deadline.getTime() - now.getTime();
    return Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24)));
  }

  function readSavedOpportunities() {
    try {
      return JSON.parse(localStorage.getItem(SAVED_OPPORTUNITIES_KEY) || '[]');
    } catch (error) {
      return [];
    }
  }

  function saveOpportunityState(list) {
    localStorage.setItem(SAVED_OPPORTUNITIES_KEY, JSON.stringify(list));
  }

  function getOpportunityStatus(score, daysLeft, missingDocs) {
    if (score >= 90) return 'strong';
    if (daysLeft <= 5) return 'deadline';
    if (missingDocs > 0 && score < 85) return 'docs';
    if (score >= 75) return 'strong';
    return 'verification';
  }

  function computeMatchForScholarship(scholarship, profile) {
    let score = 20;
    const reasons = [];
    const missingDocs = [];

    const course = profile.education.course || '';
    const courseMatch = scholarship.eligibleCourses.some((item) => course.toLowerCase().includes(item.toLowerCase()) || item.toLowerCase().includes(course.toLowerCase()));
    if (courseMatch) {
      score += 25;
      reasons.push('Your course matches the scholarship');
    } else {
      score -= 10;
      reasons.push('Course match is partial');
    }

    const level = profile.education.level || '';
    const levelMatch = scholarship.eligibleLevels.some((item) => item.toLowerCase() === level.toLowerCase());
    if (levelMatch) {
      score += 15;
      reasons.push('Your education level matches');
    } else {
      reasons.push('Education level is not an exact match');
    }

    const income = moneyToNumber(profile.eligibility.income);
    const incomeLimit = scholarship.incomeLimit || 9999999;
    if (income <= incomeLimit || income === 0) {
      score += 20;
      reasons.push('Your income falls within the required range');
    } else {
      reasons.push('Income range needs a closer review');
    }

    const residence = profile.eligibility.residence || profile.basic.state || '';
    const locationMatch = scholarship.locations.some((place) => residence.toLowerCase().includes(place.toLowerCase()) || place.toLowerCase().includes(residence.toLowerCase()));
    if (locationMatch) {
      score += 12;
      reasons.push('Your location matches the eligible region');
    } else {
      reasons.push('Location may need a review');
    }

    const category = profile.eligibility.category || '';
    const categoryMatch = scholarship.categories.some((item) => category.toLowerCase() === item.toLowerCase());
    if (categoryMatch) {
      score += 10;
      reasons.push('Your student category is eligible');
    } else {
      reasons.push('Category eligibility may need review');
    }

    const docs = scholarship.requiredDocuments || [];
    const profileDocs = ['Aadhaar', 'Marks Memo', 'Income Certificate', 'Institution Certificate', 'Bank Details', 'Caste Certificate'];
    docs.forEach((doc) => {
      const ready = profileDocs.includes(doc) || profile.preferences?.includes(doc);
      if (!ready) {
        missingDocs.push(doc);
      }
    });

    if (missingDocs.length === 0) {
      score += 10;
      reasons.push('All required documents are ready');
    } else {
      score -= Math.min(15, missingDocs.length * 5);
      reasons.push(`${missingDocs.length} document(s) still need attention`);
    }

    const daysLeft = daysRemaining(scholarship.deadline);
    if (daysLeft <= 5) {
      score -= 8;
      reasons.push('Deadline is close');
    }

    score = Math.max(0, Math.min(99, score));

    return {
      score: Math.round(score),
      reasons,
      missingDocs,
      daysLeft,
      status: getOpportunityStatus(score, daysLeft, missingDocs.length),
      nextAction: missingDocs.length ? `Upload ${missingDocs[0]}` : 'Start Application'
    };
  }

  function renderProfileSummary(profile) {
    const profileMetrics = document.getElementById('profileMetrics');
    const studentName = profile.basic.name || 'Student';
    if (!profileMetrics) return;
    profileMetrics.innerHTML = `
      <div class="metric-item"><span>Course</span><strong>${profile.education.course || 'Student'}</strong></div>
      <div class="metric-item"><span>Institution</span><strong>${profile.education.institution || 'Your Institution'}</strong></div>
      <div class="metric-item"><span>Year</span><strong>${profile.education.year || '1st Year'}</strong></div>
      <div class="metric-item"><span>Location</span><strong>${profile.eligibility.residence || profile.basic.state || 'India'}</strong></div>
      <div class="metric-item"><span>Income</span><strong>${profile.eligibility.income || '₹1 – ₹3 LPA'}</strong></div>
      <div class="metric-item"><span>Category</span><strong>${profile.eligibility.category || 'General'}</strong></div>
      <div class="metric-item profile-name-box"><span>Student</span><strong>${studentName}</strong></div>
    `;
  }

  function renderStats(profile) {
    const statsGrid = document.getElementById('statsGrid');
    if (!statsGrid) return;
    const scholarships = scholarshipDataset.map((item) => ({ ...item, match: computeMatchForScholarship(item, profile) }));
    const total = scholarships.length;
    const strong = scholarships.filter((item) => item.match.score >= 80).length;
    const verification = scholarships.filter((item) => item.match.status === 'verification').length;
    const low = scholarships.filter((item) => item.match.score < 70).length;

    statsGrid.innerHTML = `
      <div class="stat-box"><strong>${String(total).padStart(2, '0')}</strong><span>Scholarships Found</span></div>
      <div class="stat-box"><strong>${String(strong).padStart(2, '0')}</strong><span>Strong Matches</span></div>
      <div class="stat-box"><strong>${String(verification).padStart(2, '0')}</strong><span>Needs Verification</span></div>
      <div class="stat-box"><strong>${String(low).padStart(2, '0')}</strong><span>Low Confidence</span></div>
    `;
  }

  function filterScholarships(profile, searchTerm = '', filter = 'all', sortBy = 'match') {
    const enriched = scholarshipDataset.map((item) => ({
      ...item,
      match: computeMatchForScholarship(item, profile)
    }));

    let filtered = enriched.filter((item) => {
      const matchesSearch = !searchTerm || item.name.toLowerCase().includes(searchTerm.toLowerCase()) || item.provider.toLowerCase().includes(searchTerm.toLowerCase());
      const status = item.match.status;
      let filterMatch = true;
      if (filter === 'strong') filterMatch = item.match.score >= 80;
      if (filter === 'deadline') filterMatch = item.match.daysLeft <= 10;
      if (filter === 'docs') filterMatch = item.match.missingDocs.length > 0;
      if (filter === 'verification') filterMatch = status === 'verification';
      if (filter === 'amount') filterMatch = item.amount >= 60000;
      return matchesSearch && filterMatch;
    });

    filtered.sort((a, b) => {
      if (sortBy === 'deadline') return a.match.daysLeft - b.match.daysLeft;
      if (sortBy === 'amount') return b.amount - a.amount;
      if (sortBy === 'readiness') return b.match.score - a.match.score;
      return b.match.score - a.match.score;
    });

    return filtered;
  }

  function renderScholarships(profile, searchTerm = '', filter = 'all', sortBy = 'match') {
    const list = document.getElementById('scholarshipList');
    if (!list) return;

    const opportunities = filterScholarships(profile, searchTerm, filter, sortBy);
    const saved = readSavedOpportunities();

    if (!opportunities.length) {
      list.innerHTML = `
        <div class="empty-state card">
          <h3>No strong opportunities found yet.</h3>
          <p>ADIVYA couldn't find a strong match using your current profile.</p>
          <div class="empty-actions">
            <button type="button" class="btn btn-primary" data-action="profile">Update Profile</button>
            <button type="button" class="btn btn-secondary" data-action="all">Explore All Opportunities</button>
          </div>
        </div>
      `;
      list.querySelector('[data-action="profile"]')?.addEventListener('click', () => window.location.href = 'profile.html');
      list.querySelector('[data-action="all"]')?.addEventListener('click', () => {
        document.querySelector('[data-filter="all"]').click();
      });
      return;
    }

    list.innerHTML = opportunities.map((item) => {
      const savedState = saved.includes(item.id) ? 'Saved' : '♡ Save';
      const days = item.match.daysLeft;
      const statusText = days <= 2 ? 'Deadline Today' : `${days} days remaining`;
      const matchLabel = item.match.score >= 85 ? 'HIGH MATCH' : item.match.score >= 70 ? 'STRONG MATCH' : 'NEEDS REVIEW';
      return `
        <article class="scholarship-card ${item.match.status}">
          <div class="card-topline">
            <span class="type-badge">${item.tag}</span>
            <button type="button" class="save-button" data-id="${item.id}">${savedState}</button>
          </div>

          <div class="card-title-wrap">
            <div class="scholarship-icon">🎓</div>
            <div>
              <h3>${item.name}</h3>
              <p class="provider">Provider: ${item.provider}</p>
            </div>
          </div>

          <div class="amount-row">
            <strong>₹${item.amount.toLocaleString()} / year</strong>
            <span class="match-text">MATCH: ${item.match.score}%</span>
          </div>

          <ul class="eligibility-list">
            <li>✓ Course eligible</li>
            <li>✓ Income eligible</li>
            <li>✓ Location eligible</li>
            <li>✓ Education level eligible</li>
          </ul>

          <div class="card-meta-row">
            <span>Deadline: ${new Date(item.deadline).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
            <span>${statusText}</span>
          </div>

          <div class="doc-row">
            <span>Documents: ${item.requiredDocuments.filter((doc) => !item.match.missingDocs.includes(doc)).length}/${item.requiredDocuments.length} ready</span>
          </div>

          <div class="card-status-row">
            <span class="status-pill ${item.match.status}">${matchLabel}</span>
            <button type="button" class="btn btn-primary small-btn view-opportunity" data-id="${item.id}">View Opportunity</button>
          </div>

          <div class="quick-reason">
            <strong>Why am I matched?</strong>
            <button type="button" class="reason-link" data-id="${item.id}">Learn more</button>
          </div>
        </article>
      `;
    }).join('');

    list.querySelectorAll('.view-opportunity').forEach((button) => {
      button.addEventListener('click', () => openOpportunityDetail(button.dataset.id));
    });

    list.querySelectorAll('.reason-link').forEach((button) => {
      button.addEventListener('click', () => {
        const matched = scholarshipDataset.find((item) => item.id === button.dataset.id);
        const profile = loadProfile();
        const matchData = computeMatchForScholarship(matched, profile);
        openMatchReason(matched, matchData);
      });
    });

    list.querySelectorAll('.save-button').forEach((button) => {
      button.addEventListener('click', () => {
        const id = button.dataset.id;
        const currentSaved = readSavedOpportunities();
        const nextSaved = currentSaved.includes(id) ? currentSaved.filter((item) => item !== id) : [...currentSaved, id];
        saveOpportunityState(nextSaved);
        renderScholarships(loadProfile(), document.getElementById('searchInput')?.value || '', document.querySelector('.filter-pill.active')?.dataset.filter || 'all', document.getElementById('sortSelect')?.value || 'match');
      });
    });
  }

  function openMatchReason(scholarship, matchData) {
    const response = document.getElementById('aiResponse');
    const panel = document.getElementById('aiPanel');
    if (response) {
      response.textContent = `Why ADIVYA matched you: ${matchData.reasons.join('; ')}. ${matchData.missingDocs.length ? `You still need: ${matchData.missingDocs.join(', ')}.` : 'You are ready to proceed.'}`;
    }
    if (panel) panel.classList.remove('hidden');
  }

  function openOpportunityDetail(id) {
    const scholarship = scholarshipDataset.find((item) => item.id === id);
    if (!scholarship) return;
    const profile = loadProfile();
    const matchData = computeMatchForScholarship(scholarship, profile);
    const modal = document.getElementById('detailModal');
    const modalContent = document.getElementById('modalContent');
    if (!modal || !modalContent) return;

    localStorage.setItem('adivya_selected_scholarship', id);

    modalContent.innerHTML = `
      <div class="modal-topline">
        <div>
          <p class="eyebrow small">Scholarship opportunity</p>
          <h2>${scholarship.name}</h2>
        </div>
        <span class="type-badge">${matchData.score}% match</span>
      </div>
      <div class="detail-blocks">
        <div><strong>Provider</strong><span>${scholarship.provider}</span></div>
        <div><strong>Amount</strong><span>₹${scholarship.amount.toLocaleString()} / year</span></div>
        <div><strong>Deadline</strong><span>${new Date(scholarship.deadline).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</span></div>
        <div><strong>Eligibility</strong><span>${scholarship.eligibleCourses.join(', ')}</span></div>
      </div>
      <div class="detail-section">
        <h3>Why You Qualify</h3>
        <ul>${matchData.reasons.map((reason) => `<li>✓ ${reason}</li>`).join('')}</ul>
      </div>
      <div class="detail-section">
        <h3>Documents Required</h3>
        <ul>${scholarship.requiredDocuments.map((doc) => `<li>${matchData.missingDocs.includes(doc) ? '⚠' : '✓'} ${doc}</li>`).join('')}</ul>
      </div>
      <div class="detail-section">
        <h3>What You Still Need</h3>
        <p>${matchData.missingDocs.length ? `You still need: ${matchData.missingDocs.join(', ')}.` : 'You are ready to apply.'}</p>
      </div>
      <div class="detail-section">
        <h3>Application Timeline</h3>
        <p>${scholarship.timeline}</p>
      </div>
      <div class="modal-actions">
        <button type="button" class="btn btn-primary" data-action="start-application">Start Application</button>
        <button type="button" class="btn btn-secondary" data-action="check-eligibility">Check Eligibility</button>
        <button type="button" class="btn btn-secondary" data-action="save-later">Save for Later</button>
      </div>
    `;

    modalContent.querySelectorAll('[data-action]').forEach((button) => {
      button.addEventListener('click', () => {
        const action = button.dataset.action;
        if (action === 'check-eligibility') {
          window.location.href = 'eligibility.html';
        }
        if (action === 'start-application') {
          window.location.href = 'eligibility.html';
        }
      });
    });

    modal.classList.remove('hidden');
  }

  function setupOpportunityPage() {
    const profile = loadProfile();
    renderProfileSummary(profile);
    renderStats(profile);
    renderScholarships(profile, '', 'all', 'match');

    const searchInput = document.getElementById('searchInput');
    const sortSelect = document.getElementById('sortSelect');
    const filterButtons = document.querySelectorAll('.filter-pill');

    searchInput?.addEventListener('input', (event) => {
      const filter = document.querySelector('.filter-pill.active')?.dataset.filter || 'all';
      const sort = sortSelect?.value || 'match';
      renderScholarships(loadProfile(), event.target.value.trim(), filter, sort);
    });

    sortSelect?.addEventListener('change', (event) => {
      const filter = document.querySelector('.filter-pill.active')?.dataset.filter || 'all';
      renderScholarships(loadProfile(), searchInput?.value || '', filter, event.target.value);
    });

    filterButtons.forEach((button) => {
      button.addEventListener('click', () => {
        filterButtons.forEach((item) => item.classList.toggle('active', item === button));
        const current = button.dataset.filter || 'all';
        renderScholarships(loadProfile(), searchInput?.value || '', current, sortSelect?.value || 'match');
      });
    });

    document.getElementById('profileEditButton')?.addEventListener('click', () => window.location.href = 'profile.html');
    document.getElementById('logoutButton')?.addEventListener('click', () => {
      localStorage.removeItem(PROFILE_STORAGE_KEY);
      window.location.href = 'login.html';
    });
    document.getElementById('editProfileBtn')?.addEventListener('click', () => window.location.href = 'profile.html');
    document.getElementById('closeDetailModal')?.addEventListener('click', () => document.getElementById('detailModal')?.classList.add('hidden'));
    document.getElementById('closeNotificationPanel')?.addEventListener('click', () => document.getElementById('notificationPanel')?.classList.add('hidden'));
    document.getElementById('aiAssistantToggle')?.addEventListener('click', () => document.getElementById('aiPanel')?.classList.toggle('hidden'));
    document.getElementById('closeAiPanel')?.addEventListener('click', () => document.getElementById('aiPanel')?.classList.add('hidden'));

    document.querySelector('.notification-toggle')?.addEventListener('click', () => {
      document.getElementById('notificationPanel')?.classList.toggle('hidden');
    });

    document.querySelectorAll('.ai-question').forEach((button) => {
      button.addEventListener('click', () => {
        const question = button.dataset.question || '';
        const profile = loadProfile();
        const topMatch = filterScholarships(profile)[0];
        const response = document.getElementById('aiResponse');
        if (!response) return;

        if (question.includes('eligible')) {
          response.textContent = `Based on your course, income, and category, you are likely eligible for ${topMatch ? topMatch.name : 'top scholarships'} with a ${topMatch ? topMatch.match.score : 'high'}% match.`;
        } else if (question.includes('first')) {
          response.textContent = `ADIVYA recommends starting with ${topMatch ? topMatch.name : 'the strongest available scholarship'} because it has the highest match and the soonest deadline.`;
        } else if (question.includes('missing')) {
          response.textContent = `The main remaining gap is your ${topMatch ? topMatch.match.missingDocs[0] || 'document checklist' : 'supporting documents'}. Upload it before the next deadline window opens.`;
        } else {
          response.textContent = `The closest deadline is ${topMatch ? topMatch.name : 'your strongest opportunity'} with ${topMatch ? topMatch.match.daysLeft : 'several'} days remaining.`;
        }
      });
    });

    document.querySelectorAll('.nav-item, .mobile-item').forEach((button) => {
      button.addEventListener('click', () => {
        const target = button.dataset.nav;
        if (target === 'dashboard') window.location.href = 'dashboard.html';
        if (target === 'opportunities') window.location.href = 'opportunities.html';
        if (target === 'home') window.location.href = 'index.html';
        if (target === 'profile') window.location.href = 'profile.html';
      });
    });

    const notifications = [
      'New scholarship matched your profile.',
      'Your scholarship deadline is approaching.',
      'Income Certificate is required for your saved scholarship.',
      'You have a strong scholarship match.'
    ];
    const notificationList = document.getElementById('notificationList');
    if (notificationList) {
      notificationList.innerHTML = notifications.map((item) => `
        <div class="notification-item">🔔 <span>${item}</span></div>
      `).join('');
    }

    const badge = document.getElementById('notificationBadge');
    if (badge) badge.textContent = notifications.length;

    const languageSelect = document.getElementById('opportunityLanguage');
    const currentLanguage = localStorage.getItem(LANGUAGE_KEY) || 'en';
    if (languageSelect) {
      languageSelect.value = currentLanguage;
      languageSelect.addEventListener('change', (event) => {
        localStorage.setItem(LANGUAGE_KEY, event.target.value);
      });
    }
  }

  const scanState = document.createElement('div');
  scanState.className = 'scan-state';
  scanState.innerHTML = '<div class="scan-steps"><span>Scanning opportunities…</span><span>Checking your profile…</span><span>Analyzing eligibility…</span><span>Finding your strongest matches…</span><span>Your opportunities are ready.</span></div>';
  document.body.appendChild(scanState);

  const activeList = document.getElementById('scholarshipList');
  const showTimer = setTimeout(() => {
    if (scanState) scanState.classList.add('hidden');
    if (activeList) activeList.classList.remove('loading');
    setupOpportunityPage();
  }, 1200);
}

if (window.location.pathname.endsWith('eligibility.html')) {
  const PROFILE_STORAGE_KEY = 'adivya_profile_data';
  const SELECTED_SCHOLARSHIP_KEY = 'adivya_selected_scholarship';
  const SCENARIO_HISTORY_KEY = 'adivya_whatif_history';
  const LANGUAGE_KEY = 'adivya_language';

  const scholarshipCatalog = [
    {
      id: 'eng-excellence',
      name: 'Engineering Excellence Grant',
      provider: 'Telangana Education Foundation',
      amount: 50000,
      deadline: '2026-10-12',
      requiredDocuments: ['Aadhaar', 'Marks Memo', 'Income Certificate'],
      courseMatches: ['B.Tech', 'B.Sc', 'B.E.', 'Engineering'],
      levelMatches: ['Undergraduate'],
      locations: ['Telangana', 'Andhra Pradesh', 'Karnataka'],
      maxIncome: 300000,
      categories: ['General', 'OBC', 'SC', 'ST', 'EWS']
    },
    {
      id: 'inclusive-growth',
      name: 'Inclusive Growth Scholarship',
      provider: 'National Student Support Council',
      amount: 75000,
      deadline: '2026-10-05',
      requiredDocuments: ['Income Certificate', 'Caste Certificate', 'Institution Certificate'],
      courseMatches: ['B.Tech', 'B.Com', 'B.A.', 'B.Sc'],
      levelMatches: ['Undergraduate'],
      locations: ['Telangana', 'Tamil Nadu', 'Maharashtra'],
      maxIncome: 250000,
      categories: ['OBC', 'SC', 'ST', 'EWS']
    },
    {
      id: 'innovation-research',
      name: 'Innovation Research Fellowship',
      provider: 'FutureLab Foundation',
      amount: 120000,
      deadline: '2026-10-18',
      requiredDocuments: ['Research Proposal', 'Marks Memo', 'Aadhaar'],
      courseMatches: ['B.Tech', 'M.Tech', 'B.Sc'],
      levelMatches: ['Undergraduate', 'Postgraduate'],
      locations: ['Telangana', 'Karnataka', 'Delhi'],
      maxIncome: 400000,
      categories: ['General', 'EWS', 'OBC']
    },
    {
      id: 'future-talent',
      name: 'Future Talent Grant',
      provider: 'Nirmaan Education Trust',
      amount: 90000,
      deadline: '2026-10-08',
      requiredDocuments: ['Income Certificate', 'Marks Memo', 'Bank Details'],
      courseMatches: ['B.Tech', 'B.Com', 'B.A.', 'B.Sc'],
      levelMatches: ['Undergraduate'],
      locations: ['Telangana', 'Andhra Pradesh', 'Delhi'],
      maxIncome: 180000,
      categories: ['General', 'EWS', 'OBC', 'SC', 'ST']
    },
    {
      id: 'women-mentor',
      name: 'Women Mentor Scholarship',
      provider: 'SheNurture Foundation',
      amount: 60000,
      deadline: '2026-10-22',
      requiredDocuments: ['Aadhaar', 'Marks Memo', 'Income Certificate'],
      courseMatches: ['B.Tech', 'B.A.', 'B.Com', 'B.Sc'],
      levelMatches: ['Undergraduate'],
      locations: ['Telangana', 'Karnataka', 'Tamil Nadu'],
      maxIncome: 500000,
      categories: ['General', 'OBC', 'EWS']
    }
  ];

  function loadProfile() {
    try {
      const raw = JSON.parse(localStorage.getItem(PROFILE_STORAGE_KEY) || 'null');
      const fallback = {
        basic: { name: '', state: '' },
        education: { course: '', institution: '', year: '', level: '' },
        eligibility: { income: '', category: '', residence: '' },
        preferences: [],
        documents: { incomeCertificate: false, marksMemo: false, aadhaar: false, casteCertificate: false }
      };
      if (!raw) return fallback;
      return {
        ...fallback,
        ...raw,
        basic: { ...fallback.basic, ...(raw.basic || {}) },
        education: { ...fallback.education, ...(raw.education || {}) },
        eligibility: { ...fallback.eligibility, ...(raw.eligibility || {}) },
        documents: { ...fallback.documents, ...(raw.documents || {}) }
      };
    } catch (error) {
      return {
        basic: { name: '', state: '' },
        education: { course: '', institution: '', year: '', level: '' },
        eligibility: { income: '', category: '', residence: '' },
        preferences: [],
        documents: { incomeCertificate: false, marksMemo: false, aadhaar: false, casteCertificate: false }
      };
    }
  }

  function getSelectedScholarship() {
    const savedId = localStorage.getItem(SELECTED_SCHOLARSHIP_KEY);
    return scholarshipCatalog.find((item) => item.id === savedId) || scholarshipCatalog[0];
  }

  function moneyToNumber(value) {
    if (!value) return 0;
    const digits = String(value).replace(/[^0-9]/g, '');
    return Number(digits || 0);
  }

  function makeDocumentState(profile, scholarship, override = {}) {
    const docState = {
      incomeCertificate: Boolean(profile.documents?.incomeCertificate || override.incomeCertificate || profile.preferences?.includes('Income Certificate')),
      marksMemo: Boolean(profile.documents?.marksMemo || override.marksMemo),
      aadhaar: Boolean(profile.documents?.aadhaar || override.aadhaar),
      casteCertificate: Boolean(profile.documents?.casteCertificate || override.casteCertificate),
      institutionCertificate: Boolean(profile.documents?.institutionCertificate || override.institutionCertificate),
      researchProposal: Boolean(profile.documents?.researchProposal || override.researchProposal)
    };

    if (scholarship.id === 'inclusive-growth') {
      docState.incomeCertificate = Boolean(docState.incomeCertificate || override.incomeCertificate);
      docState.casteCertificate = Boolean(docState.casteCertificate || override.casteCertificate);
      docState.institutionCertificate = Boolean(docState.institutionCertificate || override.institutionCertificate);
    }

    if (scholarship.id === 'innovation-research') {
      docState.researchProposal = Boolean(docState.researchProposal || override.researchProposal);
    }

    return docState;
  }

  function getRequirementStatus(label, isMatch, explanation) {
    return {
      label,
      isMatch,
      explanation
    };
  }

  function buildRequirementSet(profile, scholarship, override = {}) {
    const state = {
      income: override.income !== undefined ? override.income : (profile.eligibility.income || '₹1 – ₹3 LPA'),
      category: override.category !== undefined ? override.category : (profile.eligibility.category || 'OBC'),
      location: override.location !== undefined ? override.location : (profile.eligibility.residence || profile.basic.state || 'Telangana'),
      level: override.level !== undefined ? override.level : (profile.education.level || 'Undergraduate'),
      course: override.course !== undefined ? override.course : (profile.education.course || 'B.Tech'),
      documentAvailable: override.documentAvailable !== undefined ? override.documentAvailable : Boolean(profile.documents?.incomeCertificate || profile.documents?.marksMemo),
      incomeAvailable: override.incomeAvailable !== undefined ? override.incomeAvailable : Boolean(profile.documents?.incomeCertificate || profile.documents?.incomeCertificate),
      documents: makeDocumentState(profile, scholarship, override)
    };

    const courseMatched = scholarship.courseMatches.some((item) => state.course.toLowerCase().includes(item.toLowerCase()) || item.toLowerCase().includes(state.course.toLowerCase()));
    const levelMatched = scholarship.levelMatches.some((item) => state.level.toLowerCase() === item.toLowerCase());
    const locationMatched = scholarship.locations.some((place) => state.location.toLowerCase().includes(place.toLowerCase()) || place.toLowerCase().includes(state.location.toLowerCase()));
    const incomeValue = moneyToNumber(state.income);
    const incomeMatched = incomeValue <= scholarship.maxIncome;
    const categoryMatched = scholarship.categories.some((item) => String(state.category).toLowerCase() === item.toLowerCase());

    const requiredDocNames = scholarship.requiredDocuments;
    const docStatus = requiredDocNames.every((doc) => {
      const lowered = doc.toLowerCase();
      if (lowered.includes('income')) return state.documents.incomeCertificate;
      if (lowered.includes('marks')) return state.documents.marksMemo;
      if (lowered.includes('aadhaar')) return state.documents.aadhaar;
      if (lowered.includes('caste')) return state.documents.casteCertificate;
      if (lowered.includes('institution')) return state.documents.institutionCertificate;
      if (lowered.includes('research')) return state.documents.researchProposal;
      return true;
    });

    const requirements = [
      getRequirementStatus('COURSE', courseMatched, `Your course (${state.course}) matches the scholarship’s required academic track.`),
      getRequirementStatus('INCOME', incomeMatched, `Your family income of ${state.income} fits within the scholarship limit of ₹${scholarship.maxIncome.toLocaleString()}.`),
      getRequirementStatus('LOCATION', locationMatched, `Your location (${state.location}) is included in the scholarship’s eligible regions.`),
      getRequirementStatus('EDUCATION LEVEL', levelMatched, `Your study level (${state.level}) matches the scholarship requirement.`),
      getRequirementStatus('DOCUMENT', docStatus, `The required supporting document has ${docStatus ? 'been satisfied' : 'not yet been verified'} for this scholarship.`)
    ];

    return { requirements, state, categoryMatched, courseMatched, incomeMatched, locationMatched, levelMatched, docStatus };
  }

  function getEligibilityState(profile, scholarship, override = {}) {
    const { requirements, state, ...rest } = buildRequirementSet(profile, scholarship, override);
    const satisfied = requirements.filter((item) => item.isMatch).length;
    const total = requirements.length;
    let status = 'eligible';
    let statusLabel = '✓ ELIGIBLE';
    if (satisfied < total) {
      status = satisfied >= total - 1 ? 'review' : 'not-eligible';
      statusLabel = satisfied >= total - 1 ? '⚠ ELIGIBILITY NEEDS VERIFICATION' : '✕ NOT CURRENTLY ELIGIBLE';
    }
    return {
      status,
      statusLabel,
      satisfied,
      total,
      progress: Math.round((satisfied / total) * 100),
      requirements,
      state,
      summary: rest
    };
  }

  function renderSelectedScholarship() {
    const scholarship = getSelectedScholarship();
    const card = document.getElementById('selectedScholarshipCard');
    if (!card) return;

    card.innerHTML = `
      <div class="scholarship-header-line">
        <div>
          <h3>${scholarship.name}</h3>
          <p>Provider: ${scholarship.provider}</p>
        </div>
        <div class="scholarship-metric">
          <span>Amount</span>
          <strong>₹${scholarship.amount.toLocaleString()} / year</strong>
        </div>
      </div>
      <div class="scholarship-meta">
        <div><span>Deadline</span><strong>${new Date(scholarship.deadline).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</strong></div>
        <div><span>Documents</span><strong>${scholarship.requiredDocuments.length} required</strong></div>
      </div>
    `;
  }

  function renderRequirements(eligibility) {
    const grid = document.getElementById('requirementGrid');
    if (!grid) return;

    grid.innerHTML = eligibility.requirements.map((item) => `
      <article class="requirement-card ${item.isMatch ? 'match' : 'warning'}">
        <div class="requirement-topline">
          <strong>${item.label}</strong>
          <span>${item.isMatch ? '✓ Matched' : '⚠ Needs Review'}</span>
        </div>
        <p class="requirement-body">${item.explanation}</p>
        <button type="button" class="why-btn" data-reason="${item.explanation}">Why?</button>
      </article>
    `).join('');

    grid.querySelectorAll('.why-btn').forEach((button) => {
      button.addEventListener('click', () => {
        const response = document.getElementById('aiResponse');
        if (response) {
          response.textContent = button.dataset.reason || 'This requirement is important because it directly affects eligibility for this scholarship.';
          document.getElementById('aiPanel')?.classList.remove('hidden');
        }
      });
    });
  }

  function renderAiSummary(eligibility) {
    const summaryEl = document.getElementById('aiSummaryText');
    if (!summaryEl) return;

    if (eligibility.status === 'eligible') {
      summaryEl.textContent = 'You currently satisfy most of the scholarship requirements. Your course, education level, location, and income align well with the available criteria, and you are ready to proceed with confidence.';
      return;
    }

    if (eligibility.status === 'review') {
      summaryEl.textContent = 'You currently satisfy most of the scholarship requirements. One key item still needs to be verified before you can confidently proceed.';
      return;
    }

    summaryEl.textContent = 'You still need to improve one or more core requirements before this scholarship is a strong match. ADIVYA has identified the missing items and the best next actions.';
  }

  function renderActionPlan(eligibility) {
    const container = document.getElementById('actionPlan');
    if (!container) return;

    const scholarship = getSelectedScholarship();
    const actions = [
      { step: '1. Add Income Certificate', label: 'Upload Document', action: 'upload' },
      { step: '2. Verify your document', label: 'Verify', action: 'verify' },
      { step: '3. Complete scholarship application', label: 'Start Application', action: 'application' },
      { step: '4. Submit before deadline', label: 'View Deadline', action: 'deadline' }
    ];

    container.innerHTML = actions.map((action, index) => `
      <div class="action-row-item ${index === 0 ? 'highlight' : ''}">
        <div>
          <p>${action.step}</p>
        </div>
        <button type="button" class="btn btn-secondary small-btn" data-action="${action.action}">${action.label}</button>
      </div>
    `).join('');

    container.querySelectorAll('[data-action]').forEach((button) => {
      button.addEventListener('click', () => {
        const action = button.dataset.action;
        const response = document.getElementById('aiResponse');
        if (response) {
          const actionMap = {
            upload: 'Upload the required document to TrustVault and recheck your eligibility.',
            verify: 'Confirm the uploaded document in TrustVault to remove the verification flag.',
            application: 'You are ready to start the scholarship application process.',
            deadline: `The deadline for ${scholarship.name} is ${new Date(scholarship.deadline).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}.`
          };
          response.textContent = actionMap[action] || 'Your next step is to continue with the scholarship checklist.';
          document.getElementById('aiPanel')?.classList.remove('hidden');
        }
      });
    });
  }

  function renderDocumentStatus(profile, scholarship, override = {}) {
    const list = document.getElementById('documentStatusList');
    if (!list) return;

    const docs = scholarship.requiredDocuments.map((doc) => {
      const state = makeDocumentState(profile, scholarship, override);
      const label = doc.toLowerCase();
      let status = '⚠ Missing';
      let isAvailable = false;
      if (label.includes('income')) isAvailable = state.incomeCertificate;
      else if (label.includes('marks')) isAvailable = state.marksMemo;
      else if (label.includes('aadhaar')) isAvailable = state.aadhaar;
      else if (label.includes('caste')) isAvailable = state.casteCertificate;
      else if (label.includes('institution')) isAvailable = state.institutionCertificate;
      else if (label.includes('research')) isAvailable = state.researchProposal;
      if (isAvailable) status = '✓ Available';
      return { doc, status };
    });

    list.innerHTML = docs.map((item) => `
      <div class="document-row">
        <div>
          <strong>${item.doc}</strong>
          <span>${item.status}</span>
        </div>
        <button type="button" class="btn btn-secondary small-btn">${item.status.includes('Available') ? 'View Document' : 'Add to TrustVault'}</button>
      </div>
    `).join('');
  }

  function renderHistory() {
    const container = document.getElementById('historyList');
    if (!container) return;

    let history = [];
    try {
      history = JSON.parse(sessionStorage.getItem(SCENARIO_HISTORY_KEY) || '[]');
    } catch (error) {
      history = [];
    }

    if (!history.length) {
      container.innerHTML = '<div class="history-item empty-history">No recent scenarios yet.</div>';
      return;
    }

    container.innerHTML = history.slice(0, 4).map((item) => `
      <div class="history-item">
        <span>✓ ${item.title}</span>
        <small>Result: ${item.result}</small>
      </div>
    `).join('');
  }

  function pushHistory(title, result) {
    let history = [];
    try {
      history = JSON.parse(sessionStorage.getItem(SCENARIO_HISTORY_KEY) || '[]');
    } catch (error) {
      history = [];
    }
    history.unshift({ title, result });
    sessionStorage.setItem(SCENARIO_HISTORY_KEY, JSON.stringify(history.slice(0, 5)));
    renderHistory();
  }

  function renderScenarioList(scholarship, profile, state) {
    const list = document.getElementById('scenarioList');
    if (!list) return;

    const scenarios = [
      { key: 'income', label: 'What if I upload my Income Certificate?', description: 'Add the required income document to TrustVault', result: 'Income Certificate Added' },
      { key: 'category', label: 'What if my category changes?', description: 'Update your category to the scholarship’s eligible category', result: 'Category Changed' },
      { key: 'document', label: 'What if I complete the missing document?', description: 'Mark the required document as available', result: 'Document Completed' },
      { key: 'course', label: 'What if I change my course?', description: 'Adjust your current course to match the scholarship', result: 'Course Updated' },
      { key: 'year', label: 'What if I apply next year?', description: 'Carry forward your profile to the next intake', result: 'Next Intake' }
    ];

    const relevant = scenarios.filter((scenario) => {
      if (scenario.key === 'income') return scholarship.requiredDocuments.some((doc) => doc.toLowerCase().includes('income'));
      if (scenario.key === 'category') return scholarship.categories.length > 0;
      if (scenario.key === 'document') return scholarship.requiredDocuments.length > 0;
      if (scenario.key === 'course') return scholarship.courseMatches.length > 0;
      if (scenario.key === 'year') return true;
      return true;
    });

    list.innerHTML = relevant.map((scenario) => `
      <button type="button" class="scenario-card" data-scenario="${scenario.key}">
        <strong>${scenario.label}</strong>
        <span>${scenario.description}</span>
      </button>
    `).join('');

    list.querySelectorAll('.scenario-card').forEach((button) => {
      button.addEventListener('click', () => {
        const scenario = button.dataset.scenario;
        const nextState = { ...state };
        if (scenario === 'income') {
          nextState.incomeAvailable = true;
          nextState.incomeValue = '₹1 – ₹2 LPA';
          nextState.documentAvailable = true;
        }
        if (scenario === 'category') {
          nextState.category = scholarship.categories[0] || 'General';
        }
        if (scenario === 'document') {
          nextState.documentAvailable = true;
          nextState.incomeAvailable = true;
        }
        if (scenario === 'course') {
          nextState.course = scholarship.courseMatches[0] || 'B.Tech';
        }
        if (scenario === 'year') {
          nextState.level = 'Undergraduate';
          nextState.year = 'Next Year';
        }

        const updated = buildRequirementSet(profile, scholarship, nextState);
        const eligibility = getEligibilityState(profile, scholarship, nextState);
        renderAll(profile, scholarship, nextState, eligibility, true);
        pushHistory(button.textContent.trim().split('\n')[0], eligibility.statusLabel);
      });
    });
  }

  function renderSimulator(profile, scholarship, state) {
    const container = document.getElementById('simulatorForm');
    if (!container) return;

    const currentIncome = moneyToNumber(state.income || profile.eligibility.income);
    const incomeLimit = scholarship.maxIncome || 300000;
    const rangeValue = Math.min(100, Math.max(0, Math.round((currentIncome / (incomeLimit * 2)) * 100) || 30));

    container.innerHTML = `
      <label>
        <span>Income</span>
        <input type="range" min="0" max="10000000" step="50000" value="${Math.min(currentIncome, 10000000)}" data-field="income" aria-label="Income range" />
        <small>₹${currentIncome.toLocaleString()} / ${incomeLimit.toLocaleString()}</small>
      </label>
      <label>
        <span>Location</span>
        <select data-field="location">
          ${scholarship.locations.map((loc) => `<option value="${loc}" ${state.location === loc ? 'selected' : ''}>${loc}</option>`).join('')}
        </select>
      </label>
      <label>
        <span>Education Level</span>
        <select data-field="level">
          ${scholarship.levelMatches.map((level) => `<option value="${level}" ${state.level === level ? 'selected' : ''}>${level}</option>`).join('')}
        </select>
      </label>
      <label>
        <span>Document Available</span>
        <input type="checkbox" data-field="documentAvailable" ${state.documentAvailable ? 'checked' : ''} />
      </label>
      <label>
        <span>Category</span>
        <select data-field="category">
          ${scholarship.categories.map((category) => `<option value="${category}" ${state.category === category ? 'selected' : ''}>${category}</option>`).join('')}
        </select>
      </label>
      <button type="button" class="btn btn-primary" id="recalculateBtn">Recalculate Eligibility</button>
    `;

    container.querySelectorAll('[data-field]').forEach((element) => {
      element.addEventListener('input', () => {
        const field = element.dataset.field;
        if (field === 'income') {
          state.income = `₹${Number(element.value).toLocaleString()}`;
        }
        if (field === 'location') {
          state.location = element.value;
        }
        if (field === 'level') {
          state.level = element.value;
        }
        if (field === 'category') {
          state.category = element.value;
        }
        if (field === 'documentAvailable') {
          state.documentAvailable = element.checked;
        }
        const eligibility = getEligibilityState(profile, scholarship, state);
        renderAll(profile, scholarship, state, eligibility, false);
      });
    });

    const recalc = document.getElementById('recalculateBtn');
    recalc?.addEventListener('click', () => {
      const eligibility = getEligibilityState(profile, scholarship, state);
      renderAll(profile, scholarship, state, eligibility, true);
    });
  }

  function renderResultCard(eligibility) {
    const badge = document.getElementById('eligibilityBadge');
    const count = document.getElementById('eligibilityCount');
    const progress = document.getElementById('resultProgressBar');
    const summary = document.getElementById('resultSummary');

    if (!badge || !count || !progress || !summary) return;

    badge.innerHTML = `<span>${eligibility.statusLabel}</span>`;
    badge.className = `eligibility-badge ${eligibility.status}`;
    count.textContent = `${eligibility.satisfied} / ${eligibility.total} requirements satisfied`;
    progress.style.width = `${eligibility.progress}%`;
    summary.innerHTML = `
      <strong>${eligibility.satisfied} / ${eligibility.total} requirements satisfied</strong>
      <span>${eligibility.status === 'eligible' ? 'You are eligible based on your current profile.' : eligibility.status === 'review' ? 'A final verification is still required before you can confidently proceed.' : 'One or more requirements still block full eligibility.'}</span>
    `;
  }

  function renderAll(profile, scholarship, scenarioState, eligibility, fromScenario = false) {
    renderSelectedScholarship();
    renderRequirements(eligibility);
    renderAiSummary(eligibility);
    renderActionPlan(eligibility);
    renderDocumentStatus(profile, scholarship, scenarioState);
    renderResultCard(eligibility);
    renderScenarioList(scholarship, profile, scenarioState);
    renderSimulator(profile, scholarship, scenarioState);
    const beforeStatus = document.getElementById('beforeStatus');
    const beforeScore = document.getElementById('beforeScore');
    const afterStatus = document.getElementById('afterStatus');
    const afterScore = document.getElementById('afterScore');

    const baseEligibility = getEligibilityState(profile, scholarship, {});
    if (beforeStatus && beforeScore) {
      beforeStatus.textContent = baseEligibility.statusLabel;
      beforeScore.textContent = `${baseEligibility.satisfied} / ${baseEligibility.total}`;
    }
    if (afterStatus && afterScore) {
      afterStatus.textContent = eligibility.statusLabel;
      afterScore.textContent = `${eligibility.satisfied} / ${eligibility.total}`;
    }

    if (fromScenario) {
      const response = document.getElementById('aiResponse');
      if (response) {
        response.textContent = eligibility.status === 'eligible'
          ? 'Your eligibility improved because the missing requirement is now satisfied.'
          : 'Your scenario has improved the scholarship fit, but one requirement still needs attention before you can apply with confidence.';
      }
    }
  }

  function initializeEligibilityPage() {
    const profile = loadProfile();
    const scholarship = getSelectedScholarship();
    const defaultState = {
      income: profile.eligibility.income || '₹1 – ₹3 LPA',
      category: profile.eligibility.category || 'OBC',
      location: profile.eligibility.residence || profile.basic.state || 'Telangana',
      level: profile.education.level || 'Undergraduate',
      course: profile.education.course || 'B.Tech',
      documentAvailable: Boolean(profile.documents?.incomeCertificate || profile.documents?.marksMemo),
      incomeAvailable: Boolean(profile.documents?.incomeCertificate),
      incomeValue: profile.eligibility.income || '₹1 – ₹3 LPA'
    };

    const baseEligibility = getEligibilityState(profile, scholarship, defaultState);
    renderAll(profile, scholarship, defaultState, baseEligibility, false);
    renderHistory();

    document.getElementById('changeScholarshipBtn')?.addEventListener('click', () => {
      window.location.href = 'opportunities.html';
    });

    document.getElementById('clearHistoryBtn')?.addEventListener('click', () => {
      sessionStorage.removeItem(SCENARIO_HISTORY_KEY);
      renderHistory();
    });

    document.getElementById('readFullExplanationBtn')?.addEventListener('click', () => {
      const response = document.getElementById('aiResponse');
      if (response) {
        response.textContent = 'Your course, education level, and income align with the scholarship criteria. The main blocker is the missing document, which can be resolved by uploading it to TrustVault and completing verification.';
      }
      document.getElementById('aiPanel')?.classList.remove('hidden');
    });

    document.getElementById('aiAssistantToggle')?.addEventListener('click', () => {
      document.getElementById('aiPanel')?.classList.toggle('hidden');
    });

    document.getElementById('closeAiPanel')?.addEventListener('click', () => {
      document.getElementById('aiPanel')?.classList.add('hidden');
    });

    document.getElementById('notificationBadge')?.addEventListener('click', () => {
      document.getElementById('notificationPanel')?.classList.toggle('hidden');
    });

    document.querySelector('.notification-toggle')?.addEventListener('click', () => {
      document.getElementById('notificationPanel')?.classList.toggle('hidden');
    });

    document.getElementById('closeNotificationPanel')?.addEventListener('click', () => {
      document.getElementById('notificationPanel')?.classList.add('hidden');
    });

    document.querySelectorAll('.nav-item, .mobile-item').forEach((button) => {
      button.addEventListener('click', () => {
        const target = button.dataset.nav;
        if (target === 'dashboard') window.location.href = 'dashboard.html';
        if (target === 'opportunities') window.location.href = 'opportunities.html';
        if (target === 'home') window.location.href = 'index.html';
        if (target === 'profile') window.location.href = 'profile.html';
      });
    });

    document.getElementById('profileEditButton')?.addEventListener('click', () => {
      window.location.href = 'profile.html';
    });

    document.getElementById('logoutButton')?.addEventListener('click', () => {
      localStorage.removeItem(PROFILE_STORAGE_KEY);
      window.location.href = 'login.html';
    });

    const notifications = [
      'Income certificate is the biggest eligibility blocker.',
      'Your scholarship profile is mostly aligned with the selected award.',
      'TrustVault verification can improve your fit score.'
    ];
    const notificationList = document.getElementById('notificationList');
    if (notificationList) {
      notificationList.innerHTML = notifications.map((message) => `
        <div class="notification-item">🔔 <span>${message}</span></div>
      `).join('');
    }

    const badge = document.getElementById('notificationBadge');
    if (badge) badge.textContent = String(notifications.length);

    const languageSelect = document.getElementById('eligibilityLanguage');
    const selectedLanguage = localStorage.getItem(LANGUAGE_KEY) || 'en';
    if (languageSelect) {
      languageSelect.value = selectedLanguage;
      languageSelect.addEventListener('change', (event) => {
        localStorage.setItem(LANGUAGE_KEY, event.target.value);
      });
    }

    document.querySelectorAll('.ai-question').forEach((button) => {
      button.addEventListener('click', () => {
        const question = button.dataset.question || 'Why am I eligible?';
        const response = document.getElementById('aiResponse');
        if (response) {
          const answerMap = {
            'Why am I eligible?': `You are well matched for ${scholarship.name} because your course, level, and income fit the scholarship profile. The main remaining check is document verification.`,
            'What am I missing?': 'The key gap is your required supporting document. Upload it to TrustVault and complete verification.',
            'How can I become eligible?': 'Upload the missing certificate, confirm the category and income values, and recheck your results.',
            'What document do I need?': `You likely need: ${scholarship.requiredDocuments.join(', ')}.`,
            'What happens if I apply next year?': 'Your profile may become stronger after you improve your document readiness and course fit before the next cycle.'
          };
          response.textContent = answerMap[question] || 'ADIVYA suggests completing the remaining document and confirming category details.';
        }
      });
    });
  }

  const loadingState = document.createElement('div');
  loadingState.className = 'scan-state';
  loadingState.innerHTML = '<div class="scan-steps"><span>Reading scholarship requirements…</span><span>Checking your profile…</span><span>Comparing eligibility…</span><span>Identifying missing requirements…</span><span>Eligibility analysis complete.</span></div>';
  document.body.appendChild(loadingState);

  setTimeout(() => {
    loadingState.classList.add('hidden');
    initializeEligibilityPage();
  }, 1200);
}

if (window.location.pathname.endsWith('documents.html')) {
  const TRUSTVAULT_KEY = 'adivya_trustvault_documents';
  const SHARING_HISTORY_KEY = 'adivya_trustvault_sharing_history';
  const PROFILE_STORAGE_KEY = 'adivya_profile_data';
  const SAVED_OPPORTUNITIES_KEY = 'adivya_saved_opportunities';

  const scholarshipInterest = [
    {
      name: 'National Merit Scholarship',
      requiredDocs: ['Income Certificate', 'Marks Memo', 'Aadhaar']
    },
    {
      name: 'State Education Support',
      requiredDocs: ['Income Certificate', 'Category Certificate', 'Bonafide Certificate']
    },
    {
      name: 'Higher Education Grant',
      requiredDocs: ['Marks Memo', 'Aadhaar', 'Bank Details']
    }
  ];

  const defaultDocuments = [
    {
      id: 'income-certificate',
      name: 'Income Certificate',
      category: 'Income',
      type: 'Income',
      uploadedDate: '2026-09-12',
      validUntil: '2027-09-12',
      status: 'needs_attention',
      fileName: 'income_certificate.pdf',
      fileType: 'PDF',
      fileSize: '1.2 MB',
      usedBy: ['National Merit Scholarship', 'State Education Support', 'Higher Education Grant'],
      mismatch: 'Possible Name Mismatch',
      note: 'The name on this document is different from the name saved in your ADIVYA profile.'
    },
    {
      id: 'aadhaar-card',
      name: 'Aadhaar / Identity Proof',
      category: 'Identity',
      type: 'Identity',
      uploadedDate: '2026-08-22',
      validUntil: '2031-08-22',
      status: 'verified',
      fileName: 'aadhaar.pdf',
      fileType: 'PDF',
      fileSize: '730 KB',
      usedBy: ['National Merit Scholarship', 'Higher Education Grant'],
      mismatch: '',
      note: 'ADIVYA document check found no obvious issues.'
    },
    {
      id: 'marks-memo',
      name: 'Marks Memo',
      category: 'Education',
      type: 'Education',
      uploadedDate: '2026-09-01',
      validUntil: '2027-09-01',
      status: 'verified',
      fileName: 'marks_memo.pdf',
      fileType: 'PDF',
      fileSize: '1.7 MB',
      usedBy: ['National Merit Scholarship', 'Higher Education Grant'],
      mismatch: '',
      note: 'ADIVYA document check found no obvious issues.'
    },
    {
      id: 'bonafide-certificate',
      name: 'Bonafide Certificate',
      category: 'Education',
      type: 'Education',
      uploadedDate: '2026-09-10',
      validUntil: '2026-10-12',
      status: 'expiring_soon',
      fileName: 'bonafide_certificate.pdf',
      fileType: 'PDF',
      fileSize: '840 KB',
      usedBy: ['State Education Support'],
      mismatch: '',
      note: 'The certificate is valid soon but should be updated before the next cycle.'
    },
    {
      id: 'domicile-certificate',
      name: 'Domicile / Residence Certificate',
      category: 'Residence',
      type: 'Residence',
      uploadedDate: '2025-11-06',
      validUntil: '2026-09-22',
      status: 'expired',
      fileName: 'residence_certificate.pdf',
      fileType: 'PDF',
      fileSize: '960 KB',
      usedBy: ['State Education Support'],
      mismatch: 'Expired document',
      note: 'This document has expired and should be replaced before reuse.'
    }
  ];

  function loadProfile() {
    try {
      const raw = JSON.parse(localStorage.getItem(PROFILE_STORAGE_KEY) || '{}');
      return {
        basic: { name: raw.basic?.name || '', state: raw.basic?.state || '' },
        education: { course: raw.education?.course || '', institution: raw.education?.institution || '', year: raw.education?.year || '', level: raw.education?.level || '' },
        eligibility: { income: raw.eligibility?.income || '', category: raw.eligibility?.category || '', residence: raw.eligibility?.residence || '' }
      };
    } catch (error) {
      return {
        basic: { name: '', state: '' },
        education: { course: '', institution: '', year: '', level: '' },
        eligibility: { income: '', category: '', residence: '' }
      };
    }
  }

  function loadStoredDocuments() {
    try {
      const raw = JSON.parse(localStorage.getItem(TRUSTVAULT_KEY) || 'null');
      return Array.isArray(raw) && raw.length ? raw : defaultDocuments;
    } catch (error) {
      return defaultDocuments;
    }
  }

  function saveStoredDocuments(list) {
    localStorage.setItem(TRUSTVAULT_KEY, JSON.stringify(list));
  }

  function loadSharingHistory() {
    try {
      return JSON.parse(localStorage.getItem(SHARING_HISTORY_KEY) || '[]');
    } catch (error) {
      return [];
    }
  }

  function saveSharingHistory(list) {
    localStorage.setItem(SHARING_HISTORY_KEY, JSON.stringify(list));
  }

  function readSavedOpportunities() {
    try {
      return JSON.parse(localStorage.getItem(SAVED_OPPORTUNITIES_KEY) || '[]');
    } catch (error) {
      return [];
    }
  }

  function getDocsByCategory(category) {
    return loadStoredDocuments().filter((doc) => category === 'all' || doc.category === category);
  }

  function toDate(value) {
    const date = new Date(value);
    return Number.isNaN(date.getTime()) ? null : date;
  }

  function daysRemaining(value) {
    const date = toDate(value);
    if (!date) return 0;
    const diff = date.getTime() - Date.now();
    return Math.ceil(diff / (1000 * 60 * 60 * 24));
  }

  function getStatusLabel(status) {
    const labels = {
      verified: 'VERIFIED',
      needs_attention: 'NEEDS ATTENTION',
      expiring_soon: 'EXPIRING SOON',
      expired: 'EXPIRED',
      missing: 'MISSING'
    };
    return labels[status] || 'MISSING';
  }

  function detectMismatch(doc, profile = loadProfile()) {
    const issues = [];
    if (profile.basic.name && doc.name && !doc.name.toLowerCase().includes(profile.basic.name.split(' ')[0].toLowerCase())) {
      issues.push({
        title: 'Possible Name Mismatch',
        message: 'The name on this document is different from the name saved in your ADIVYA profile.'
      });
    }
    if (doc.status === 'expired') {
      issues.push({
        title: 'Expired Document',
        message: 'This document has expired and should be replaced before reuse.'
      });
    }
    return issues;
  }

  function getMissingDocuments() {
    const docs = loadStoredDocuments();
    const existing = docs.map((doc) => doc.name.toLowerCase());
    const missing = [];

    scholarshipInterest.forEach((scholarship) => {
      scholarship.requiredDocs.forEach((item) => {
        if (!existing.includes(item.toLowerCase()) && !missing.some((entry) => entry.name === item)) {
          missing.push({
            name: item,
            scholarship: scholarship.name,
            requiredBy: scholarship.name,
            status: 'Missing'
          });
        }
      });
    });

    return missing;
  }

  function renderCategoryList() {
    const container = document.getElementById('categoryList');
    if (!container) return;

    const categories = [
      { key: 'all', label: 'All', emoji: '📦' },
      { key: 'Education', label: 'Education', emoji: '🎓' },
      { key: 'Income', label: 'Income', emoji: '💰' },
      { key: 'Identity', label: 'Identity', emoji: '🪪' },
      { key: 'Residence', label: 'Residence', emoji: '🏠' },
      { key: 'Other', label: 'Other', emoji: '📄' }
    ];

    const docs = loadStoredDocuments();
    const categoryState = document.body.dataset.category || 'all';

    container.innerHTML = categories.map((category) => {
      const count = category.key === 'all' ? docs.length : docs.filter((doc) => doc.category === category.key).length;
      return `
        <button type="button" class="category-card ${categoryState === category.key ? 'active' : ''}" data-category="${category.key}">
          <span class="category-emoji">${category.emoji}</span>
          <div>
            <strong>${category.label}</strong>
            <small>${count} items</small>
          </div>
        </button>
      `;
    }).join('');

    container.querySelectorAll('.category-card').forEach((button) => {
      button.addEventListener('click', () => {
        document.body.dataset.category = button.dataset.category || 'all';
        renderDocuments();
        renderCategoryList();
      });
    });
  }

  function renderSummary() {
    const docs = loadStoredDocuments();
    const total = docs.length;
    const verified = docs.filter((doc) => doc.status === 'verified').length;
    const needsAttention = docs.filter((doc) => ['needs_attention', 'expiring_soon', 'expired'].includes(doc.status)).length;
    const missing = getMissingDocuments().length;
    const readiness = total ? Math.round((verified / total) * 100) : 0;

    const totalNode = document.getElementById('totalDocumentCount');
    const verifiedNode = document.getElementById('verifiedDocumentCount');
    const attentionNode = document.getElementById('attentionDocumentCount');
    const missingNode = document.getElementById('missingDocumentCount');
    const progressBar = document.getElementById('readinessProgressBar');
    const progressText = document.getElementById('readinessProgressText');

    if (totalNode) totalNode.textContent = String(total);
    if (verifiedNode) verifiedNode.textContent = String(verified).padStart(2, '0');
    if (attentionNode) attentionNode.textContent = String(needsAttention).padStart(2, '0');
    if (missingNode) missingNode.textContent = String(missing).padStart(2, '0');
    if (progressBar) progressBar.style.width = `${readiness}%`;
    if (progressText) progressText.textContent = `${readiness}% document readiness`;
  }

  function renderMissingDocuments() {
    const container = document.getElementById('missingDocumentsList');
    if (!container) return;

    const missing = getMissingDocuments();
    if (!missing.length) {
      container.innerHTML = '<div class="missing-item empty">No major missing items detected from your saved opportunities.</div>';
      return;
    }

    container.innerHTML = missing.slice(0, 4).map((item) => `
      <div class="missing-item">
        <div>
          <strong>${item.name}</strong>
          <span>Required by: ${item.requiredBy}</span>
        </div>
        <button type="button" class="btn btn-secondary small-btn" data-missing-add="${item.name}">Add Document</button>
      </div>
    `).join('');

    container.querySelectorAll('[data-missing-add]').forEach((button) => {
      button.addEventListener('click', () => {
        openUploadModal(button.dataset.missingAdd);
      });
    });
  }

  function renderApplicationCoverage() {
    const container = document.getElementById('applicationCoverageList');
    if (!container) return;

    const docs = loadStoredDocuments();
    const list = scholarshipInterest.map((entry) => {
      const required = entry.requiredDocs;
      const ready = required.filter((item) => docs.some((doc) => doc.name.toLowerCase() === item.toLowerCase() && doc.status === 'verified'));
      const missing = required.filter((item) => !docs.some((doc) => doc.name.toLowerCase() === item.toLowerCase() && doc.status === 'verified'));
      return `
        <div class="coverage-item">
          <div class="coverage-header">
            <strong>${entry.name}</strong>
            <span>${ready.length}/${required.length} ready</span>
          </div>
          <div class="coverage-docs">
            ${required.map((doc) => `
              <span class="coverage-chip ${docs.some((item) => item.name.toLowerCase() === doc.toLowerCase() && item.status === 'verified') ? 'complete' : 'pending'}">
                ${docs.some((item) => item.name.toLowerCase() === doc.toLowerCase() && item.status === 'verified') ? '✓' : '⚠'} ${doc}
              </span>
            `).join('')}
          </div>
          ${missing.length ? `<button type="button" class="btn btn-secondary small-btn" data-coverage-action="${entry.name}">Complete Application Documents</button>` : '<button type="button" class="btn btn-secondary small-btn" data-coverage-action="${entry.name}">Application Ready</button>'}
        </div>
      `;
    }).join('');

    container.innerHTML = list;
    container.querySelectorAll('[data-coverage-action]').forEach((button) => {
      button.addEventListener('click', () => {
        const scholarshipName = button.dataset.coverageAction;
        const missingForScholarship = scholarshipInterest.find((item) => item.name === scholarshipName)?.requiredDocs || [];
        const docs = loadStoredDocuments();
        const missingNames = missingForScholarship.filter((item) => !docs.some((doc) => doc.name.toLowerCase() === item.toLowerCase()));
        if (missingNames.length) {
          openUploadModal(missingNames[0]);
        } else {
          const response = document.getElementById('aiResponse');
          if (response) response.textContent = `${scholarshipName} is ready to proceed. Your required documents are already present in TrustVault.`;
          document.getElementById('aiPanel')?.classList.remove('hidden');
        }
      });
    });
  }

  function renderSharingHistory() {
    const container = document.getElementById('sharingHistoryList');
    if (!container) return;

    const history = loadSharingHistory();
    if (!history.length) {
      container.innerHTML = '<div class="history-item empty">No sharing activity yet.</div>';
      return;
    }

    container.innerHTML = history.slice(0, 3).map((entry) => `
      <div class="history-item">
        <strong>${entry.document}</strong>
        <span>Shared with: ${entry.scholarship}</span>
        <small>Date: ${entry.date} • Status: ${entry.status}</small>
      </div>
    `).join('');
  }

  function renderNotifications() {
    const badge = document.getElementById('notificationBadge');
    const panel = document.getElementById('notificationList');
    if (!badge || !panel) return;

    const docs = loadStoredDocuments();
    const notifications = [];
    docs.forEach((doc) => {
      if (doc.status === 'expiring_soon') {
        notifications.push(`${doc.name} expires in ${daysRemaining(doc.validUntil)} days.`);
      }
      if (doc.status === 'needs_attention') {
        notifications.push(`Document mismatch detected for ${doc.name}.`);
      }
      if (doc.status === 'verified') {
        notifications.push(`${doc.name} was successfully added to TrustVault.`);
      }
    });

    if (!notifications.length) {
      notifications.push('Your document vault is up to date.');
    }

    badge.textContent = String(notifications.length);
    panel.innerHTML = notifications.map((message) => `
      <div class="notification-item">🔔 <span>${message}</span></div>
    `).join('');
  }

  function renderDocuments() {
    const container = document.getElementById('documentList');
    if (!container) return;

    const docs = loadStoredDocuments();
    const activeCategory = document.body.dataset.category || 'all';
    const searchTerm = (document.getElementById('documentSearch')?.value || '').trim().toLowerCase();
    const filterStatus = document.body.dataset.filterStatus || 'all';
    const sortValue = document.getElementById('documentSort')?.value || 'recent';

    let filtered = docs.filter((doc) => {
      const matchesCategory = activeCategory === 'all' || doc.category === activeCategory;
      const matchesSearch = !searchTerm || doc.name.toLowerCase().includes(searchTerm) || doc.type.toLowerCase().includes(searchTerm);
      let matchesStatus = true;
      if (filterStatus === 'verified') matchesStatus = doc.status === 'verified';
      if (filterStatus === 'needs_attention') matchesStatus = doc.status === 'needs_attention';
      if (filterStatus === 'expiring_soon') matchesStatus = doc.status === 'expiring_soon';
      if (filterStatus === 'expired') matchesStatus = doc.status === 'expired';
      if (filterStatus === 'missing') matchesStatus = doc.status === 'missing';
      return matchesCategory && matchesSearch && matchesStatus;
    });

    filtered.sort((a, b) => {
      if (sortValue === 'expiry') return new Date(a.validUntil) - new Date(b.validUntil);
      if (sortValue === 'name') return a.name.localeCompare(b.name);
      if (sortValue === 'status') return getStatusLabel(a.status).localeCompare(getStatusLabel(b.status));
      return new Date(b.uploadedDate) - new Date(a.uploadedDate);
    });

    if (!filtered.length) {
      container.innerHTML = '<div class="empty-docs">No documents match the current filter.</div>';
      return;
    }

    container.innerHTML = filtered.map((doc) => {
      const mismatchList = detectMismatch(doc, loadProfile());
      const reasons = mismatchList.length ? mismatchList.map((issue) => issue.title).join(', ') : 'ADIVYA document check found no obvious issues.';
      return `
        <article class="document-card ${doc.status}">
          <div class="document-card-header">
            <div>
              <strong>${doc.name}</strong>
              <span>${doc.type}</span>
            </div>
            <span class="status-pill ${doc.status}">${getStatusLabel(doc.status)}</span>
          </div>

          <div class="document-meta">
            <span>Uploaded: ${new Date(doc.uploadedDate).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
            <span>Valid Until: ${new Date(doc.validUntil).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
            <span>Used By: ${doc.usedBy.length} Scholarships</span>
          </div>

          <p class="document-note">${doc.mismatch || reasons}</p>

          <div class="document-actions">
            <button type="button" class="btn btn-secondary small-btn" data-action="view" data-id="${doc.id}">View</button>
            <button type="button" class="btn btn-secondary small-btn" data-action="verify" data-id="${doc.id}">${doc.status === 'verified' ? 'Mark as Reviewed' : 'Verify'}</button>
            <button type="button" class="btn btn-secondary small-btn" data-action="replace" data-id="${doc.id}">Replace</button>
          </div>
        </article>
      `;
    }).join('');

    container.querySelectorAll('[data-action]').forEach((button) => {
      button.addEventListener('click', () => {
        const id = button.dataset.id;
        const action = button.dataset.action;
        const documentItem = loadStoredDocuments().find((item) => item.id === id);
        if (!documentItem) return;

        if (action === 'view') openPreview(id);
        if (action === 'verify') toggleVerification(id);
        if (action === 'replace') openUploadModal(documentItem.name);
      });
    });
  }

  function toggleVerification(id) {
    const docs = loadStoredDocuments();
    const doc = docs.find((item) => item.id === id);
    if (!doc) return;
    doc.status = doc.status === 'verified' ? 'needs_attention' : 'verified';
    const response = document.getElementById('aiResponse');
    if (response) {
      response.textContent = doc.status === 'verified'
        ? `ADIVYA document check for ${doc.name} is now marked as reviewed and ready for reuse.`
        : `ADIVYA document check for ${doc.name} needs a closer review before it can be reused.`;
    }
    saveStoredDocuments(docs);
    renderAll();
  }

  function openPreview(id) {
    const docs = loadStoredDocuments();
    const doc = docs.find((item) => item.id === id);
    if (!doc) return;

    const content = document.getElementById('previewContent');
    const modal = document.getElementById('previewModal');
    if (!content || !modal) return;

    const mismatch = detectMismatch(doc, loadProfile());
    content.innerHTML = `
      <div class="preview-card">
        <div class="preview-row"><span>Document name</span><strong>${doc.name}</strong></div>
        <div class="preview-row"><span>Document type</span><strong>${doc.type}</strong></div>
        <div class="preview-row"><span>Upload date</span><strong>${new Date(doc.uploadedDate).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}</strong></div>
        <div class="preview-row"><span>Verification status</span><strong>${getStatusLabel(doc.status)}</strong></div>
        <div class="preview-row"><span>Expiry date</span><strong>${new Date(doc.validUntil).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}</strong></div>
        <div class="preview-row"><span>Used by applications</span><strong>${doc.usedBy.length} scholarships</strong></div>
        <div class="mismatch-box ${mismatch.length ? 'warning' : ''}">
          ${mismatch.length ? `<strong>${mismatch[0].title}</strong><p>${mismatch[0].message}</p>` : '<strong>ADIVYA document check</strong><p>ADIVYA found no obvious issues with this document.</p>'}
        </div>
      </div>
    `;

    const deleteButton = document.getElementById('deletePreviewBtn');
    const replaceButton = document.getElementById('replacePreviewBtn');
    deleteButton.onclick = () => {
      const nextDocs = loadStoredDocuments().filter((item) => item.id !== id);
      saveStoredDocuments(nextDocs);
      modal.classList.add('hidden');
      renderAll();
    };
    replaceButton.onclick = () => {
      modal.classList.add('hidden');
      openUploadModal(doc.name);
    };

    modal.classList.remove('hidden');
  }

  function openUploadModal(prefillName = '') {
    const modal = document.getElementById('uploadModal');
    if (!modal) return;

    const typeSelect = document.getElementById('uploadDocumentType');
    const fileInput = document.getElementById('uploadFileInput');
    const fileMeta = document.getElementById('fileMetaBlock');
    const progress = document.getElementById('uploadProgressBlock');
    const progressBar = document.getElementById('uploadProgressBar');
    const progressText = document.getElementById('uploadProgressText');
    const nextButton = document.getElementById('uploadNextBtn');
    const reviewFileName = document.getElementById('reviewFileName');
    const reviewDocumentType = document.getElementById('reviewDocumentType');
    const reviewFileSize = document.getElementById('reviewFileSize');
    const finalStatus = document.getElementById('finalUploadStatus');

    modal.dataset.currentStep = '1';
    if (typeSelect) typeSelect.value = 'Education';
    if (fileInput) fileInput.value = '';
    if (fileMeta) fileMeta.classList.add('hidden');
    if (progress) progress.classList.add('hidden');
    if (progressBar) progressBar.style.width = '0%';
    if (progressText) progressText.textContent = '0% uploaded';
    if (reviewFileName) reviewFileName.textContent = '--';
    if (reviewDocumentType) reviewDocumentType.textContent = 'Education';
    if (reviewFileSize) reviewFileSize.textContent = '--';
    if (finalStatus) finalStatus.textContent = 'Ready to save';

    const stepDots = document.querySelectorAll('.step-dot');
    stepDots.forEach((dot, index) => dot.classList.toggle('active', index === 0));

    const uploadState = { currentStep: 1, fileName: prefillName || '', type: 'Education' };
    modal.dataset.uploadState = JSON.stringify(uploadState);
    modal.classList.remove('hidden');

    fileInput?.addEventListener('change', (event) => {
      const file = event.target.files?.[0];
      if (!file) return;
      uploadState.fileName = file.name;
      uploadState.fileSize = `${(file.size / 1024 / 1024).toFixed(2)} MB`;
      if (fileMeta) {
        const nameNode = document.getElementById('selectedFileName');
        const sizeNode = document.getElementById('selectedFileSize');
        if (nameNode) nameNode.textContent = file.name;
        if (sizeNode) sizeNode.textContent = uploadState.fileSize;
        fileMeta.classList.remove('hidden');
      }
      if (progress) progress.classList.remove('hidden');
      let current = 0;
      const interval = setInterval(() => {
        current += 20;
        if (progressBar) progressBar.style.width = `${current}%`;
        if (progressText) progressText.textContent = `${current}% uploaded`;
        if (current >= 100) {
          clearInterval(interval);
          if (reviewFileName) reviewFileName.textContent = file.name;
          if (reviewFileSize) reviewFileSize.textContent = uploadState.fileSize;
        }
      }, 150);
    }, { once: true });

    nextButton.onclick = () => {
      const step = Number(modal.dataset.currentStep || '1');
      if (step === 1) {
        uploadState.type = typeSelect?.value || 'Education';
        if (reviewDocumentType) reviewDocumentType.textContent = uploadState.type;
        modal.dataset.currentStep = '2';
        updateUploadSteps(2);
      } else if (step === 2) {
        if (!fileInput?.files?.length) {
          const response = document.getElementById('aiResponse');
          if (response) response.textContent = 'Please choose a document file before continuing.';
          return;
        }
        modal.dataset.currentStep = '3';
        updateUploadSteps(3);
      } else if (step === 3) {
        modal.dataset.currentStep = '4';
        updateUploadSteps(4);
        const verifyCard = document.getElementById('finalUploadStatus');
        if (verifyCard) verifyCard.textContent = 'ADIVYA is checking your document…';
        setTimeout(() => {
          const mismatchIssue = detectMismatch({ name: uploadState.fileName.includes('income') ? 'Income Certificate' : uploadState.fileName || 'Uploaded Document', status: 'needs_attention', validUntil: new Date(Date.now() + 180 * 86400000).toISOString() }, loadProfile());
          const finalStatusText = mismatchIssue.length ? 'Document needs attention' : 'Document ready for TrustVault';
          if (finalStatus) finalStatus.textContent = finalStatusText;
          if (document.getElementById('aiResponse')) {
            document.getElementById('aiResponse').textContent = mismatchIssue.length ? 'ADIVYA found a name or document mismatch. Review before reusing this file.' : 'Document detected successfully. Required information is present and the file is ready for storage.';
          }
          modal.dataset.currentStep = '5';
          updateUploadSteps(5);
        }, 1800);
      } else if (step === 4 || step === 5) {
        const file = fileInput?.files?.[0];
        const docs = loadStoredDocuments();
        const finalName = prefillName || file?.name || 'New Document';
        const docPayload = {
          id: `doc-${Date.now()}`,
          name: finalName,
          category: uploadState.type,
          type: uploadState.type,
          uploadedDate: new Date().toISOString(),
          validUntil: new Date(Date.now() + 365 * 86400000).toISOString(),
          status: 'needs_attention',
          fileName: file?.name || `${finalName}.pdf`,
          fileType: file?.type || 'PDF',
          fileSize: file ? `${(file.size / 1024 / 1024).toFixed(2)} MB` : '1.0 MB',
          usedBy: ['National Merit Scholarship'],
          mismatch: 'Possible Name Mismatch',
          note: 'Please review the highlighted issue before using this document.'
        };

        docs.unshift(docPayload);
        saveStoredDocuments(docs);
        modal.classList.add('hidden');
        const response = document.getElementById('aiResponse');
        if (response) {
          response.textContent = 'Your document was successfully added to TrustVault. ADIVYA has checked it and flagged a review item for you.';
        }
        renderAll();
      }
    };

    document.getElementById('cancelUploadBtn')?.addEventListener('click', () => modal.classList.add('hidden'));
    document.querySelectorAll('[data-close="upload"]').forEach((button) => {
      button.addEventListener('click', () => modal.classList.add('hidden'));
    });
  }

  function updateUploadSteps(step) {
    const dots = document.querySelectorAll('.step-dot');
    dots.forEach((dot, index) => {
      dot.classList.toggle('active', index + 1 === step);
    });
    const activePanel = document.querySelector(`.upload-step-panel[data-step="${step}"]`);
    document.querySelectorAll('.upload-step-panel').forEach((panel) => panel.classList.toggle('active', panel === activePanel));
    const nextButton = document.getElementById('uploadNextBtn');
    if (nextButton) {
      nextButton.textContent = step === 5 ? 'Save to TrustVault' : 'Continue';
    }
  }

  function renderPrivacyCenter() {
    const container = document.getElementById('privacyContent');
    if (!container) return;

    const docs = loadStoredDocuments();
    const history = loadSharingHistory();
    container.innerHTML = `
      <div class="privacy-grid">
        <div class="privacy-card">
          <strong>Documents Stored</strong>
          <span>${docs.length}</span>
        </div>
        <div class="privacy-card">
          <strong>Documents Shared</strong>
          <span>${history.length}</span>
        </div>
        <div class="privacy-card">
          <strong>Sharing Permissions</strong>
          <span>Consent-based sharing</span>
        </div>
        <div class="privacy-card">
          <strong>Account Data</strong>
          <span>Profile-linked access</span>
        </div>
      </div>
      <div class="privacy-copy">
        <p>ADIVYA keeps your documents in protected storage and only shares the selected documents you explicitly approve.</p>
        <button type="button" class="btn btn-secondary small-btn" id="manageDataBtn">Delete / Manage Data</button>
      </div>
    `;

    document.getElementById('manageDataBtn')?.addEventListener('click', () => {
      const response = document.getElementById('aiResponse');
      if (response) response.textContent = 'Your account data is managed from the ADIVYA Privacy Center. You can remove or update stored documents any time.';
      document.getElementById('aiPanel')?.classList.remove('hidden');
    });
  }

  function openPrivacyCenter() {
    const modal = document.getElementById('privacyModal');
    if (!modal) return;
    renderPrivacyCenter();
    modal.classList.remove('hidden');
  }

  function openShareModal(docId, scholarshipName = 'National Merit Scholarship') {
    const docs = loadStoredDocuments();
    const doc = docs.find((item) => item.id === docId);
    if (!doc) return;

    const modal = document.getElementById('shareModal');
    const content = document.getElementById('shareContent');
    if (!modal || !content) return;

    content.innerHTML = `
      <div class="share-summary">
        <p><strong>Scholarship:</strong> ${scholarshipName}</p>
        <p><strong>Documents requested:</strong> ✓ ${doc.name}</p>
        <p>ADIVYA will only share the selected documents required for this application.</p>
      </div>
    `;

    document.getElementById('confirmShareBtn').onclick = () => {
      const history = loadSharingHistory();
      history.unshift({
        document: doc.name,
        scholarship: scholarshipName,
        date: new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }),
        status: 'Approved'
      });
      saveSharingHistory(history.slice(0, 6));
      modal.classList.add('hidden');
      const response = document.getElementById('aiResponse');
      if (response) response.textContent = `${doc.name} has been approved for sharing with ${scholarshipName}.`;
      renderSharingHistory();
      renderNotifications();
    };

    modal.classList.remove('hidden');
  }

  function renderAiResponse(question) {
    const docs = loadStoredDocuments();
    const missing = getMissingDocuments();
    const expiring = docs.filter((doc) => doc.status === 'expiring_soon' || doc.status === 'expired')[0];
    const response = document.getElementById('aiResponse');
    if (!response) return;

    const answerMap = {
      'Which documents am I missing?': missing.length ? `The main missing items are ${missing.map((item) => item.name).slice(0, 3).join(', ')}.` : 'You already have the required document set for the current saved scholarship opportunities.',
      'Which document expires soon?': expiring ? `${expiring.name} expires in ${daysRemaining(expiring.validUntil)} days and should be updated soon.` : 'No documents are due to expire in the next cycle.',
      'Where is my Income Certificate?': 'Your Income Certificate is stored in TrustVault under the Income category and is currently flagged for review.',
      'Which scholarships need this document?': 'The Income Certificate is linked to National Merit Scholarship, State Education Support, and Higher Education Grant.',
      'Why is this document flagged?': 'This document is flagged because the name on it differs from the name saved in your ADIVYA profile.'
    };

    response.textContent = answerMap[question] || 'ADIVYA suggests reviewing the flagged document and reusing the verified ones stored in TrustVault.';
  }

  function renderAll() {
    renderSummary();
    renderCategoryList();
    renderMissingDocuments();
    renderApplicationCoverage();
    renderDocuments();
    renderSharingHistory();
    renderNotifications();
  }

  function initializeDocumentsPage() {
    document.body.dataset.category = 'all';
    document.body.dataset.filterStatus = 'all';

    const searchInput = document.getElementById('documentSearch');
    if (searchInput) {
      searchInput.addEventListener('input', () => renderDocuments());
    }

    const sortSelect = document.getElementById('documentSort');
    if (sortSelect) {
      sortSelect.addEventListener('change', () => renderDocuments());
    }

    document.querySelectorAll('.filter-pill').forEach((button) => {
      button.addEventListener('click', () => {
        document.querySelectorAll('.filter-pill').forEach((item) => item.classList.toggle('active', item === button));
        document.body.dataset.filterStatus = button.dataset.filter || 'all';
        renderDocuments();
      });
    });

    document.getElementById('addDocumentBtn')?.addEventListener('click', () => openUploadModal());
    document.getElementById('privacyCenterBtn')?.addEventListener('click', () => openPrivacyCenter());

    document.getElementById('aiAssistantToggle')?.addEventListener('click', () => {
      document.getElementById('aiPanel')?.classList.toggle('hidden');
    });
    document.getElementById('closeAiPanel')?.addEventListener('click', () => {
      document.getElementById('aiPanel')?.classList.add('hidden');
    });
    document.getElementById('closeNotificationPanel')?.addEventListener('click', () => {
      document.getElementById('notificationPanel')?.classList.add('hidden');
    });
    document.querySelector('.notification-toggle')?.addEventListener('click', () => {
      document.getElementById('notificationPanel')?.classList.toggle('hidden');
    });
    document.getElementById('notificationBadge')?.addEventListener('click', () => {
      document.getElementById('notificationPanel')?.classList.toggle('hidden');
    });
    document.querySelectorAll('.ai-question').forEach((button) => {
      button.addEventListener('click', () => {
        renderAiResponse(button.dataset.question || 'Which documents am I missing?');
      });
    });

    document.querySelectorAll('.nav-item, .mobile-item').forEach((button) => {
      button.addEventListener('click', () => {
        const target = button.dataset.nav;
        if (target === 'home') window.location.href = 'index.html';
        if (target === 'dashboard') window.location.href = 'dashboard.html';
        if (target === 'opportunities') window.location.href = 'opportunities.html';
        if (target === 'applications') window.location.href = 'dashboard.html';
        if (target === 'documents') window.location.href = 'documents.html';
        if (target === 'journey') window.location.href = 'journey.html';
        if (target === 'profile') window.location.href = 'profile.html';
      });
    });

    document.getElementById('profileEditButton')?.addEventListener('click', () => window.location.href = 'profile.html');
    document.getElementById('logoutButton')?.addEventListener('click', () => {
      localStorage.removeItem(PROFILE_STORAGE_KEY);
      window.location.href = 'login.html';
    });

    document.getElementById('closePreviewBtn')?.addEventListener('click', () => document.getElementById('previewModal')?.classList.add('hidden'));
    document.getElementById('cancelShareBtn')?.addEventListener('click', () => document.getElementById('shareModal')?.classList.add('hidden'));
    document.querySelectorAll('[data-close="preview"]').forEach((button) => {
      button.addEventListener('click', () => document.getElementById('previewModal')?.classList.add('hidden'));
    });
    document.querySelectorAll('[data-close="share"]').forEach((button) => {
      button.addEventListener('click', () => document.getElementById('shareModal')?.classList.add('hidden'));
    });
    document.querySelectorAll('[data-close="privacy"]').forEach((button) => {
      button.addEventListener('click', () => document.getElementById('privacyModal')?.classList.add('hidden'));
    });

    const languageSelect = document.getElementById('documentsLanguage');
    const savedLang = localStorage.getItem('adivya_language') || 'en';
    if (languageSelect) {
      languageSelect.value = savedLang;
      languageSelect.addEventListener('change', (event) => {
        localStorage.setItem('adivya_language', event.target.value);
      });
    }

    const response = document.getElementById('aiResponse');
    if (response) {
      response.textContent = 'ADIVYA is reviewing your document readiness and scholarship requirements.';
    }

    renderAll();
  }

  initializeDocumentsPage();
}

if (window.location.pathname.endsWith('applications.html')) {
  const PROFILE_STORAGE_KEY = 'adivya_profile_data';
  const SELECTED_SCHOLARSHIP_KEY = 'adivya_selected_scholarship';
  const APPLICATION_HISTORY_KEY = 'adivya_application_history';
  const APPLICATION_STATE_KEY = 'adivya_application_state';
  const TRUSTVAULT_KEY = 'adivya_trustvault_documents';
  const LANGUAGE_KEY = 'adivya_language';

  const scholarshipCatalog = [
    {
      id: 'eng-excellence',
      name: 'Engineering Excellence Grant',
      provider: 'Telangana Education Foundation',
      amount: 50000,
      deadline: '2026-10-12',
      requiredDocuments: ['Aadhaar', 'Marks Memo', 'Income Certificate'],
      category: 'General',
      maxIncome: 300000,
      courseMatches: ['B.Tech', 'B.Sc', 'B.E.']
    },
    {
      id: 'inclusive-growth',
      name: 'Inclusive Growth Scholarship',
      provider: 'National Student Support Council',
      amount: 75000,
      deadline: '2026-10-05',
      requiredDocuments: ['Income Certificate', 'Caste Certificate', 'Institution Certificate'],
      category: 'OBC',
      maxIncome: 250000,
      courseMatches: ['B.Tech', 'B.Com', 'B.A.', 'B.Sc']
    },
    {
      id: 'future-talent',
      name: 'Future Talent Grant',
      provider: 'Nirmaan Education Trust',
      amount: 90000,
      deadline: '2026-10-08',
      requiredDocuments: ['Income Certificate', 'Marks Memo', 'Bank Details'],
      category: 'General',
      maxIncome: 180000,
      courseMatches: ['B.Tech', 'B.Com', 'B.A.', 'B.Sc']
    }
  ];

  function loadAppProfile() {
    try {
      const raw = JSON.parse(localStorage.getItem(PROFILE_STORAGE_KEY) || '{}');
      return {
        basic: { name: raw.basic?.name || '', dob: raw.basic?.dob || '', mobile: raw.basic?.mobile || '', state: raw.basic?.state || '' },
        education: { course: raw.education?.course || '', institution: raw.education?.institution || '', year: raw.education?.year || '', semester: raw.education?.semester || '', level: raw.education?.level || '' },
        eligibility: { income: raw.eligibility?.income || '', category: raw.eligibility?.category || '', residence: raw.eligibility?.residence || '' },
        documents: raw.documents || { incomeCertificate: false, marksMemo: false, aadhaar: false, casteCertificate: false, institutionCertificate: false }
      };
    } catch (error) {
      return {
        basic: { name: '', dob: '', mobile: '', state: '' },
        education: { course: '', institution: '', year: '', semester: '', level: '' },
        eligibility: { income: '', category: '', residence: '' },
        documents: { incomeCertificate: false, marksMemo: false, aadhaar: false, casteCertificate: false, institutionCertificate: false }
      };
    }
  }

  function loadSelectedScholarship() {
    const savedId = localStorage.getItem(SELECTED_SCHOLARSHIP_KEY);
    return scholarshipCatalog.find((item) => item.id === savedId) || scholarshipCatalog[0];
  }

  function loadApplicationState() {
    try {
      return JSON.parse(localStorage.getItem(APPLICATION_STATE_KEY) || '{}');
    } catch (error) {
      return {};
    }
  }

  function saveApplicationState(state) {
    localStorage.setItem(APPLICATION_STATE_KEY, JSON.stringify(state));
  }

  function loadTrustVaultDocuments() {
    try {
      return JSON.parse(localStorage.getItem(TRUSTVAULT_KEY) || '[]');
    } catch (error) {
      return [];
    }
  }

  function moneyToNumber(value) {
    const digits = String(value || '').replace(/[^0-9]/g, '');
    return Number(digits || 0);
  }

  function getCandidateStatus(profile, scholarship) {
    const requiredFields = [
      profile.basic.name,
      profile.basic.dob,
      profile.basic.mobile,
      profile.education.institution,
      profile.education.course,
      profile.education.year,
      profile.education.semester,
      profile.eligibility.income,
      profile.eligibility.category
    ];

    const completed = requiredFields.filter((field) => field && String(field).trim() !== '').length;
    const total = requiredFields.length;

    const docNames = loadTrustVaultDocuments().map((doc) => doc.name.toLowerCase());
    const requiredDocs = scholarship.requiredDocuments || [];
    const docsAvailable = requiredDocs.filter((doc) => docNames.some((name) => name.includes(doc.toLowerCase()) || doc.toLowerCase().includes(name))).length;

    const incomeValue = moneyToNumber(profile.eligibility.income);
    const categoryMatch = scholarship.requiredDocuments.some((doc) => doc.toLowerCase().includes('caste')) ? profile.eligibility.category !== 'General' : true;
    const hasProfileMatch = profile.education.course.toLowerCase().includes(scholarship.courseMatches[0].toLowerCase()) || scholarship.courseMatches.some((course) => profile.education.course.toLowerCase().includes(course.toLowerCase()));
    const eligible = hasProfileMatch && incomeValue <= scholarship.maxIncome && categoryMatch;

    const consistencyMismatch = false;
    const deadline = new Date(scholarship.deadline);
    const timeLeft = deadline.getTime() - Date.now();
    const deadlineApproaching = timeLeft < 48 * 60 * 60 * 1000;

    let readiness = 25 + (completed / total) * 40 + (docsAvailable / Math.max(requiredDocs.length, 1)) * 25 + (eligible ? 10 : 0) + (consistencyMismatch ? -5 : 5) + (deadlineApproaching ? -5 : 8);
    readiness = Math.max(0, Math.min(100, Math.round(readiness)));

    return {
      completed,
      total,
      docsAvailable,
      requiredDocsCount: requiredDocs.length,
      eligible,
      consistencyMismatch,
      deadlineApproaching,
      readiness,
      profileCompletion: Math.round((completed / total) * 100)
    };
  }

  function getIssueList(profile, scholarship, status) {
    const issues = [];

    if (!profile.basic.name || profile.basic.name.trim() === '') {
      issues.push({ title: 'Missing name', reason: 'Your profile is missing the applicant name.', action: 'Complete Field', target: 'fieldName' });
    }
    if (!profile.basic.mobile || profile.basic.mobile.trim() === '') {
      issues.push({ title: 'Missing mobile number', reason: 'A valid mobile number is required for contact and verification.', action: 'Complete Field', target: 'fieldMobile' });
    }
    if (!profile.education.semester || profile.education.semester.trim() === '') {
      issues.push({ title: 'Semester not provided', reason: 'Semester details help validate continued enrollment and eligibility.', action: 'Complete Field', target: 'fieldSemester' });
    }

    const docNames = loadTrustVaultDocuments().map((doc) => doc.name.toLowerCase());
    const missingDoc = scholarship.requiredDocuments.find((doc) => !docNames.some((name) => name.includes(doc.toLowerCase()) || doc.toLowerCase().includes(name)));
    if (missingDoc) {
      issues.push({ title: `${missingDoc} missing`, reason: 'This document is required for a complete application and may affect eligibility.', action: 'Open TrustVault', target: 'documents' });
    }

    if (status.consistencyMismatch) {
      issues.push({ title: 'Possible name mismatch', reason: 'Some information appears different across your profile and submitted records.', action: 'Review', target: 'review' });
    }

    if (!status.eligible) {
      issues.push({ title: 'Eligibility needs verification', reason: 'Your profile may not fully satisfy the scholarship criteria yet.', action: 'Check Eligibility', target: 'eligibility' });
    }

    if (status.deadlineApproaching) {
      issues.push({ title: 'Deadline approaching', reason: 'The submission deadline is close and ADIVYA recommends entering Rescue Mode.', action: 'Enter Rescue Mode', target: 'rescue' });
    }

    return issues;
  }

  function renderResults(profile, scholarship, status) {
    const resultsGrid = document.getElementById('resultsGrid');
    if (!resultsGrid) return;

    const docMissing = scholarship.requiredDocuments.filter((doc) => !loadTrustVaultDocuments().some((stored) => stored.name.toLowerCase().includes(doc.toLowerCase()) || doc.toLowerCase().includes(stored.name.toLowerCase())));
    const results = [
      {
        title: 'Completeness',
        state: status.completed >= status.total - 1 ? '✓ All required fields completed' : `⚠ ${status.total - status.completed} fields incomplete`,
        statusClass: status.completed >= status.total - 1 ? 'success' : 'warning',
        button: 'Fix',
        action: 'fix'
      },
      {
        title: 'Documents',
        state: docMissing.length === 0 ? `✓ ${scholarship.requiredDocuments.length} / ${scholarship.requiredDocuments.length} documents available` : `⚠ ${docMissing[0]} missing`,
        statusClass: docMissing.length === 0 ? 'success' : 'warning',
        button: 'Open TrustVault',
        action: 'documents'
      },
      {
        title: 'Eligibility',
        state: status.eligible ? '✓ Requirements satisfied' : '⚠ Requirement needs verification',
        statusClass: status.eligible ? 'success' : 'warning',
        button: 'Check Eligibility',
        action: 'eligibility'
      },
      {
        title: 'Consistency',
        state: status.consistencyMismatch ? '⚠ Possible mismatch detected' : '✓ Information matches',
        statusClass: status.consistencyMismatch ? 'warning' : 'success',
        button: 'Review',
        action: 'review'
      },
      {
        title: 'Deadline',
        state: status.deadlineApproaching ? '⚠ Deadline approaching' : '✓ Enough time remaining',
        statusClass: status.deadlineApproaching ? 'warning' : 'success',
        button: status.deadlineApproaching ? 'Enter Rescue Mode' : 'Check Deadline',
        action: status.deadlineApproaching ? 'rescue' : 'deadline'
      }
    ];

    resultsGrid.innerHTML = results.map((result) => `
      <article class="result-card ${result.statusClass}">
        <div class="result-topline">
          <strong>${result.title}</strong>
          <span class="result-status">${result.state.includes('✓') ? '✓' : '⚠'}</span>
        </div>
        <p>${result.state}</p>
        <button type="button" class="btn btn-secondary small-btn" data-result-action="${result.action}">${result.button}</button>
      </article>
    `).join('');

    resultsGrid.querySelectorAll('[data-result-action]').forEach((button) => {
      button.addEventListener('click', () => {
        const action = button.dataset.resultAction;
        if (action === 'documents') window.location.href = 'documents.html';
        if (action === 'eligibility') window.location.href = 'eligibility.html';
        if (action === 'rescue') window.location.href = 'rescue.html';
        if (action === 'review') document.getElementById('finalReviewCard')?.classList.remove('hidden');
        if (action === 'fix') {
          document.getElementById('fieldSemester')?.focus();
          document.getElementById('fieldSemester')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      });
    });
  }

  function renderCompleteness(profile) {
    const container = document.getElementById('completenessCheck');
    if (!container) return;

    const items = [
      { label: 'Personal Details', entries: ['Name', 'Date of Birth', 'Mobile Number'], values: [profile.basic.name, profile.basic.dob, profile.basic.mobile] },
      { label: 'Education', entries: ['Institution', 'Course', 'Year', 'Semester'], values: [profile.education.institution, profile.education.course, profile.education.year, profile.education.semester] },
      { label: 'Financial', entries: ['Family Income', 'Income Certificate'], values: [profile.eligibility.income, loadTrustVaultDocuments().some((doc) => doc.name.toLowerCase().includes('income')) ? '✓' : '⚠'] }
    ];

    container.innerHTML = items.map((section) => `
      <div class="check-item-group">
        <strong>${section.label}</strong>
        ${section.entries.map((entry, index) => {
          const value = section.values[index];
          const status = value && String(value).trim() !== '' && value !== '⚠' ? '✓' : '⚠';
          return `
            <div class="check-item">
              <span class="status-pill ${status === '⚠' ? 'warning' : ''}">${status}</span>
              <div>
                <strong>${entry}</strong>
                <small>${status === '✓' ? 'Complete' : 'Incomplete'}</small>
              </div>
              <button type="button" class="btn btn-secondary small-btn" data-fix-field="${entry}">${status === '✓' ? 'View' : 'Complete Field'}</button>
            </div>
          `;
        }).join('')}
      </div>
    `).join('');

    container.querySelectorAll('[data-fix-field]').forEach((button) => {
      button.addEventListener('click', () => {
        const fieldMap = {
          Name: 'fieldName',
          'Date of Birth': 'fieldDob',
          'Mobile Number': 'fieldMobile',
          Institution: 'fieldInstitution',
          Course: 'fieldCourse',
          Year: 'fieldSemester',
          Semester: 'fieldSemester',
          'Family Income': 'fieldIncome',
          'Income Certificate': 'documents'
        };
        const target = fieldMap[button.parentElement.querySelector('strong')?.textContent || ''];
        if (target === 'documents') window.location.href = 'documents.html';
        else if (target) {
          const el = document.getElementById(target);
          if (el) {
            el.focus();
            el.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
        }
      });
    });
  }

  function renderIssues(profile, scholarship, status) {
    const container = document.getElementById('issueList');
    if (!container) return;

    const issues = getIssueList(profile, scholarship, status);
    if (!issues.length) {
      container.innerHTML = '<div class="issue-item"><strong>No issues found</strong><p>Your application is ready to move to final review.</p></div>';
      return;
    }

    container.innerHTML = issues.map((issue) => `
      <div class="issue-item">
        <div class="issue-title-row">
          <strong>${issue.title}</strong>
          <span>🔴</span>
        </div>
        <p>${issue.reason}</p>
        <small>Why it matters: This issue can affect eligibility, document verification, or submission readiness.</small>
        <button type="button" class="btn btn-secondary small-btn" data-issue-action="${issue.target}">${issue.action}</button>
      </div>
    `).join('');

    container.querySelectorAll('[data-issue-action]').forEach((button) => {
      button.addEventListener('click', () => {
        const target = button.dataset.issueAction;
        if (target === 'documents') window.location.href = 'documents.html';
        else if (target === 'eligibility') window.location.href = 'eligibility.html';
        else if (target === 'rescue') window.location.href = 'rescue.html';
        else if (target === 'review') document.getElementById('finalReviewCard')?.classList.remove('hidden');
        else {
          const el = document.getElementById(target);
          if (el) {
            el.focus();
            el.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
        }
      });
    });
  }

  function renderHistory() {
    const history = document.getElementById('applicationHistory');
    if (!history) return;

    const records = JSON.parse(localStorage.getItem(APPLICATION_HISTORY_KEY) || '[]');
    if (!records.length) {
      history.innerHTML = `
        <div class="history-item"><strong>National Merit Scholarship</strong><span>Protection Check: Passed</span><small>Last Checked: 26 Sep 2026</small><small>Status: Submitted</small></div>
        <div class="history-item"><strong>State Education Support</strong><span>Protection Check: 2 issues found</span><small>Last Checked: 24 Sep 2026</small><small>Status: In Progress</small></div>
      `;
      return;
    }

    history.innerHTML = records.map((item) => `
      <div class="history-item">
        <strong>${item.scholarship}</strong>
        <span>Protection Check: ${item.status}</span>
        <small>Last Checked: ${item.date}</small>
        <small>Status: ${item.result}</small>
      </div>
    `).join('');
  }

  function getFormProfileValues() {
    const base = loadAppProfile();
    const form = document.getElementById('applicationForm');
    if (!form) return base;

    const values = new FormData(form);
    return {
      ...base,
      basic: {
        ...base.basic,
        name: String(values.get('name') || base.basic.name || ''),
        dob: String(values.get('dob') || base.basic.dob || ''),
        mobile: String(values.get('mobile') || base.basic.mobile || '')
      },
      education: {
        ...base.education,
        institution: String(values.get('institution') || base.education.institution || ''),
        course: String(values.get('course') || base.education.course || ''),
        semester: String(values.get('semester') || base.education.semester || ''),
        year: String(base.education.year || '2nd Year')
      },
      eligibility: {
        ...base.eligibility,
        income: String(values.get('income') || base.eligibility.income || ''),
        category: String(values.get('category') || base.eligibility.category || '')
      }
    };
  }

  function persistFormProfile() {
    const nextProfile = getFormProfileValues();
    localStorage.setItem(PROFILE_STORAGE_KEY, JSON.stringify(nextProfile));
    return nextProfile;
  }

  function updateReadinessDisplay(profile, scholarship, status) {
    const readinessScore = document.getElementById('readinessScore');
    const documentReadinessValue = document.getElementById('documentReadinessValue');
    const consistencyStatusValue = document.getElementById('consistencyStatusValue');
    const submissionStatusValue = document.getElementById('submissionStatusValue');

    if (readinessScore) readinessScore.textContent = `${status.readiness}%`;
    if (documentReadinessValue) documentReadinessValue.textContent = `${status.docsAvailable} / ${status.requiredDocsCount}`;
    if (consistencyStatusValue) consistencyStatusValue.textContent = status.consistencyMismatch ? '⚠ 1 issue' : '✓ No issues';
    if (submissionStatusValue) submissionStatusValue.textContent = status.readiness >= 100 ? 'Ready to review' : status.readiness >= 90 ? 'Nearly ready' : 'Not ready';

    const scholarshipMeta = document.getElementById('scholarshipNameMeta');
    const providerMeta = document.getElementById('providerMeta');
    const deadlineMeta = document.getElementById('deadlineMeta');
    const applicationStatusMeta = document.getElementById('applicationStatusMeta');

    if (scholarshipMeta) scholarshipMeta.textContent = scholarship.name;
    if (providerMeta) providerMeta.textContent = scholarship.provider;
    if (deadlineMeta) deadlineMeta.textContent = new Date(scholarship.deadline).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
    if (applicationStatusMeta) applicationStatusMeta.textContent = status.readiness >= 100 ? 'Ready for Review' : 'In Progress';
  }

  function updateReviewSummary(profile, scholarship, status) {
    const student = document.getElementById('reviewStudent');
    const course = document.getElementById('reviewCourse');
    const institution = document.getElementById('reviewInstitution');
    const scholarshipField = document.getElementById('reviewScholarship');
    const amount = document.getElementById('reviewAmount');
    const deadline = document.getElementById('reviewDeadline');
    const documents = document.getElementById('reviewDocuments');
    const eligibility = document.getElementById('reviewEligibility');
    const appDetails = document.getElementById('reviewApplication');

    if (student) student.textContent = profile.basic.name;
    if (course) course.textContent = profile.education.course;
    if (institution) institution.textContent = profile.education.institution;
    if (scholarshipField) scholarshipField.textContent = scholarship.name;
    if (amount) amount.textContent = `₹${scholarship.amount.toLocaleString()}`;
    if (deadline) deadline.textContent = new Date(scholarship.deadline).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
    if (documents) documents.textContent = `${status.docsAvailable} / ${status.requiredDocsCount}`;
    if (eligibility) eligibility.textContent = status.eligible ? 'Eligible' : 'Needs review';
    if (appDetails) appDetails.textContent = `${profile.education.course} • ${profile.education.semester}`;
  }

  function runProtectionCheck() {
    const scholarship = loadSelectedScholarship();
    const profile = loadAppProfile();
    const status = getCandidateStatus(profile, scholarship);
    const issues = getIssueList(profile, scholarship, status);
    const scanSequence = document.getElementById('scanSequence');

    if (scanSequence) {
      const steps = ['Checking application…', 'Checking profile…', 'Checking documents…', 'Checking eligibility…', 'Checking consistency…', 'Checking deadline…', 'Protection Check Complete'];
      scanSequence.textContent = steps[0];
      let index = 0;
      const interval = setInterval(() => {
        index += 1;
        if (index < steps.length) {
          scanSequence.textContent = steps[index];
        } else {
          clearInterval(interval);
        }
      }, 340);
    }

    renderResults(profile, scholarship, status);
    renderCompleteness(profile);
    renderIssues(profile, scholarship, status);
    updateReadinessDisplay(profile, scholarship, status);
    updateReviewSummary(profile, scholarship, status);

    const historyEntry = {
      scholarship: scholarship.name,
      status: issues.length ? `${issues.length} issues found` : 'Passed',
      date: new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }),
      result: issues.length ? 'In Progress' : 'Ready for Review'
    };
    const records = JSON.parse(localStorage.getItem(APPLICATION_HISTORY_KEY) || '[]');
    records.unshift(historyEntry);
    localStorage.setItem(APPLICATION_HISTORY_KEY, JSON.stringify(records.slice(0, 6)));
    renderHistory();

    const aiResponse = document.getElementById('aiResponse');
    if (aiResponse) {
      aiResponse.textContent = issues.length
        ? `ADIVYA found ${issues.length} issue${issues.length > 1 ? 's' : ''}. The most urgent blocker is: ${issues[0].title}.`
        : 'All protection checks passed. Your application is ready for final review and submission.';
    }

    const finalReviewCard = document.getElementById('finalReviewCard');
    if (!issues.length && finalReviewCard) {
      finalReviewCard.classList.remove('hidden');
    }
  }

  function initializeApplicationProtectionPage() {
    const scholarship = loadSelectedScholarship();
    const profile = loadAppProfile();
    const status = getCandidateStatus(profile, scholarship);
    renderResults(profile, scholarship, status);
    renderCompleteness(profile);
    renderIssues(profile, scholarship, status);
    updateReadinessDisplay(profile, scholarship, status);
    updateReviewSummary(profile, scholarship, status);
    renderHistory();

    const form = document.getElementById('applicationForm');
    if (form) {
      const fields = {
        fieldName: profile.basic.name,
        fieldDob: profile.basic.dob,
        fieldMobile: profile.basic.mobile,
        fieldInstitution: profile.education.institution,
        fieldCourse: profile.education.course,
        fieldSemester: profile.education.semester,
        fieldIncome: profile.eligibility.income,
        fieldCategory: profile.eligibility.category
      };
      Object.entries(fields).forEach(([id, value]) => {
        const field = document.getElementById(id);
        if (field) field.value = value || '';
      });

      form.addEventListener('input', () => {
        const nextProfile = persistFormProfile();
        const nextStatus = getCandidateStatus(nextProfile, scholarship);
        renderResults(nextProfile, scholarship, nextStatus);
        renderCompleteness(nextProfile);
        renderIssues(nextProfile, scholarship, nextStatus);
        updateReadinessDisplay(nextProfile, scholarship, nextStatus);
        updateReviewSummary(nextProfile, scholarship, nextStatus);
      });
    }

    document.getElementById('runProtectionButton')?.addEventListener('click', runProtectionCheck);

    document.getElementById('saveApplicationButton')?.addEventListener('click', () => {
      const nextProfile = persistFormProfile();
      const appState = {
        scholarshipId: scholarship.id,
        updatedAt: new Date().toISOString(),
        fields: nextProfile
      };
      saveApplicationState(appState);
      const aiResponse = document.getElementById('aiResponse');
      if (aiResponse) aiResponse.textContent = 'Your application has been saved. You can continue later without losing your progress.';
    });

    document.getElementById('reviewCheckbox')?.addEventListener('change', (event) => {
      const button = document.getElementById('continueSubmissionButton');
      if (button) button.disabled = !event.target.checked;
    });

    document.getElementById('continueSubmissionButton')?.addEventListener('click', () => {
      const deadline = new Date(scholarship.deadline);
      if (deadline.getTime() < Date.now()) {
        const aiResponse = document.getElementById('aiResponse');
        if (aiResponse) aiResponse.textContent = 'Deadline Passed. ADIVYA does not allow submission after the scholarship deadline.';
        return;
      }
      const modal = document.getElementById('submissionModal');
      if (modal) modal.classList.remove('hidden');
    });

    document.getElementById('confirmSubmitButton')?.addEventListener('click', () => {
      const deadline = new Date(scholarship.deadline);
      if (deadline.getTime() < Date.now()) {
        const aiResponse = document.getElementById('aiResponse');
        if (aiResponse) aiResponse.textContent = 'Deadline Passed. ADIVYA does not allow submission after the scholarship deadline.';
        return;
      }

      const modal = document.getElementById('submissionModal');
      if (modal) modal.classList.add('hidden');

      const submitted = {
        scholarship: scholarship.name,
        submittedAt: new Date().toISOString(),
        status: 'Submitted',
        result: 'Submitted'
      };
      const records = JSON.parse(localStorage.getItem(APPLICATION_HISTORY_KEY) || '[]');
      records.unshift({ ...submitted, date: new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }), status: 'Passed' });
      localStorage.setItem(APPLICATION_HISTORY_KEY, JSON.stringify(records.slice(0, 6)));
      renderHistory();

      const aiResponse = document.getElementById('aiResponse');
      if (aiResponse) aiResponse.textContent = '✓ APPLICATION SUBMITTED. Your scholarship was submitted after your explicit confirmation.';
      document.getElementById('applicationStatusMeta').textContent = 'Submitted';
    });

    document.querySelectorAll('[data-close-modal]').forEach((button) => {
      button.addEventListener('click', () => {
        const target = button.dataset.closeModal;
        const modal = document.getElementById(target);
        if (modal) modal.classList.add('hidden');
      });
    });

    document.querySelectorAll('.nav-item, .mobile-item').forEach((button) => {
      button.addEventListener('click', () => {
        const target = button.dataset.nav;
        if (target === 'home') window.location.href = 'index.html';
        if (target === 'dashboard') window.location.href = 'dashboard.html';
        if (target === 'opportunities') window.location.href = 'opportunities.html';
        if (target === 'documents') window.location.href = 'documents.html';
        if (target === 'journey') window.location.href = 'journey.html';
        if (target === 'applications') window.location.href = 'applications.html';
      });
    });

    document.getElementById('profileEditButton')?.addEventListener('click', () => window.location.href = 'profile.html');
    document.getElementById('logoutButton')?.addEventListener('click', () => {
      localStorage.removeItem(PROFILE_STORAGE_KEY);
      window.location.href = 'login.html';
    });

    document.getElementById('aiAssistantToggle')?.addEventListener('click', () => {
      document.getElementById('aiPanel')?.classList.toggle('hidden');
    });
    document.getElementById('closeAiPanel')?.addEventListener('click', () => {
      document.getElementById('aiPanel')?.classList.add('hidden');
    });
    document.getElementById('closeNotificationPanel')?.addEventListener('click', () => {
      document.getElementById('notificationPanel')?.classList.add('hidden');
    });
    document.querySelector('.notification-toggle')?.addEventListener('click', () => {
      document.getElementById('notificationPanel')?.classList.toggle('hidden');
    });

    const notificationList = document.getElementById('notificationList');
    if (notificationList) {
      const messages = [
        { text: 'Your application has one unresolved issue.', target: 'issue' },
        { text: 'Your Income Certificate is missing.', target: 'documents' },
        { text: 'Your application is ready for final review.', target: 'review' },
        { text: 'Your scholarship deadline is approaching.', target: 'deadline' }
      ];
      notificationList.innerHTML = messages.map((item) => `<div class="notification-item" data-notification-target="${item.target}"><button type="button" class="notification-link">🔔 <span>${item.text}</span></button></div>`).join('');
      notificationList.querySelectorAll('[data-notification-target]').forEach((row) => {
        row.addEventListener('click', () => {
          const target = row.dataset.notificationTarget;
          if (target === 'documents') window.location.href = 'documents.html';
          if (target === 'review') document.getElementById('finalReviewCard')?.classList.remove('hidden');
          if (target === 'deadline') window.location.href = 'rescue.html';
          if (target === 'issue') document.getElementById('issueList')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
      });
    }

    const notificationBadge = document.getElementById('notificationBadge');
    if (notificationBadge) notificationBadge.textContent = '4';

    document.querySelectorAll('.ai-question').forEach((button) => {
      button.addEventListener('click', () => {
        const response = document.getElementById('aiResponse');
        const question = button.dataset.question || 'Why isn\'t my application ready?';
        const scholarship = loadSelectedScholarship();
        const status = getCandidateStatus(loadAppProfile(), scholarship);
        const issueText = question === 'Why isn\'t my application ready?' ? `ADIVYA is tracking ${status.readiness}% readiness. The biggest blockers are incomplete documents and profile details.` :
          question === 'What is blocking submission?' ? 'Your missing documents and profile inconsistencies are the main blockers for submission.' :
          question === 'What documents are missing?' ? `The required documents are: ${scholarship.requiredDocuments.join(', ')}.` :
          question === 'Why did my readiness score change?' ? 'The score changed because the application data was updated and a previous document or field was corrected.' :
          'The application is ready to submit only after all checks pass and you explicitly confirm the final review.';

        if (response) response.textContent = issueText;
      });
    });

    const langSelect = document.getElementById('applicationLanguage');
    if (langSelect) {
      const savedLang = localStorage.getItem(LANGUAGE_KEY) || 'en';
      langSelect.value = savedLang;
      langSelect.addEventListener('change', (event) => localStorage.setItem(LANGUAGE_KEY, event.target.value));
    }

    document.getElementById('reviewGoBackButton')?.addEventListener('click', () => {
      document.getElementById('finalReviewCard')?.classList.add('hidden');
    });
  }

  initializeApplicationProtectionPage();
}

if (window.location.pathname.endsWith('rescue.html')) {
  const PROFILE_STORAGE_KEY = 'adivya_profile_data';
  const SELECTED_SCHOLARSHIP_KEY = 'adivya_selected_scholarship';
  const RESCUE_STATE_KEY = 'adivya_rescue_state';
  const TRUSTVAULT_KEY = 'adivya_trustvault_documents';
  const LANGUAGE_KEY = 'adivya_language';

  function loadProfileForRescue() {
    try {
      const raw = JSON.parse(localStorage.getItem(PROFILE_STORAGE_KEY) || '{}');
      return {
        basic: { name: raw.basic?.name || '', state: raw.basic?.state || '' },
        education: { course: raw.education?.course || '', institution: raw.education?.institution || '', year: raw.education?.year || '', level: raw.education?.level || '' },
        eligibility: { income: raw.eligibility?.income || '', category: raw.eligibility?.category || '', residence: raw.eligibility?.residence || '' },
        preferences: raw.preferences || []
      };
    } catch (error) {
      return {
        basic: { name: '', state: '' },
        education: { course: '', institution: '', year: '', level: '' },
        eligibility: { income: '', category: '', residence: '' },
        preferences: []
      };
    }
  }

  function loadTrustVaultDocuments() {
    try {
      return JSON.parse(localStorage.getItem(TRUSTVAULT_KEY) || '[]');
    } catch (error) {
      return [];
    }
  }

  function loadRescueState() {
    try {
      return JSON.parse(localStorage.getItem(RESCUE_STATE_KEY) || '{}');
    } catch (error) {
      return {};
    }
  }

  function saveRescueState(state) {
    localStorage.setItem(RESCUE_STATE_KEY, JSON.stringify(state));
  }

  function getScholarshipOptions() {
    const profile = loadProfileForRescue();
    const dataset = [
      {
        id: 'eng-excellence',
        name: 'Engineering Excellence Grant',
        provider: 'Telangana Education Foundation',
        amount: 50000,
        deadline: new Date(Date.now() + 17 * 3600 * 1000).toISOString(),
        eligibleCourses: ['B.Tech', 'B.Sc', 'B.E.'],
        eligibleLevels: ['Undergraduate'],
        locations: ['Telangana', 'Andhra Pradesh', 'Karnataka'],
        categories: ['General', 'OBC', 'SC', 'ST', 'EWS'],
        requiredDocuments: ['Aadhaar', 'Marks Memo', 'Income Certificate'],
        status: 'strong',
        tag: 'HIGH MATCH'
      },
      {
        id: 'inclusive-growth',
        name: 'Inclusive Growth Scholarship',
        provider: 'National Student Support Council',
        amount: 75000,
        deadline: new Date(Date.now() + 3 * 24 * 3600 * 1000 + 6 * 3600 * 1000).toISOString(),
        eligibleCourses: ['B.Tech', 'B.Com', 'B.A.', 'B.Sc'],
        eligibleLevels: ['Undergraduate'],
        locations: ['Telangana', 'Tamil Nadu', 'Maharashtra'],
        categories: ['OBC', 'SC', 'ST', 'EWS'],
        requiredDocuments: ['Income Certificate', 'Caste Certificate', 'Institution Certificate'],
        status: 'strong',
        tag: 'STRONG MATCH'
      },
      {
        id: 'future-talent',
        name: 'Future Talent Grant',
        provider: 'Nirmaan Education Trust',
        amount: 90000,
        deadline: new Date(Date.now() + 11 * 24 * 3600 * 1000).toISOString(),
        eligibleCourses: ['B.Tech', 'B.Com', 'B.A.', 'B.Sc'],
        eligibleLevels: ['Undergraduate'],
        locations: ['Telangana', 'Andhra Pradesh', 'Delhi'],
        categories: ['General', 'EWS', 'OBC', 'SC', 'ST'],
        requiredDocuments: ['Income Certificate', 'Marks Memo', 'Bank Details'],
        status: 'deadline',
        tag: 'DEADLINE SOON'
      }
    ];

    const savedId = localStorage.getItem(SELECTED_SCHOLARSHIP_KEY);
    if (savedId) {
      const match = dataset.find((item) => item.id === savedId);
      if (match) return match;
    }

    const profileCourse = (profile.education.course || '').toLowerCase();
    const eligible = dataset.filter((item) => item.eligibleCourses.some((course) => profileCourse.includes(course.toLowerCase())) || item.categories.includes(profile.eligibility.category || 'General'));
    return eligible[0] || dataset[0];
  }

  function calculateTimeParts(deadlineValue) {
    const deadline = new Date(deadlineValue);
    const diff = deadline.getTime() - Date.now();
    if (diff <= 0) {
      return { dead: true, hours: 0, minutes: 0, days: 0, totalHours: 0, countdownText: 'Deadline Passed' };
    }

    const totalMinutes = Math.floor(diff / 60000);
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    const days = Math.floor(hours / 24);
    const remainingHours = hours % 24;

    if (days > 0) {
      return { dead: false, hours: remainingHours, minutes, days, totalHours: hours, countdownText: `${days}d ${remainingHours}h remaining` };
    }

    return { dead: false, hours, minutes, days: 0, totalHours: hours, countdownText: `${hours}h ${minutes}m remaining` };
  }

  function computeReadiness(profile, scholarship, docs) {
    let score = 15;
    const completedFields = [];

    if (profile.basic.name && profile.basic.name !== 'Student') { score += 12; completedFields.push('profile'); }
    if (profile.education.course && profile.education.institution) { score += 16; completedFields.push('education'); }
    if (profile.eligibility.category && profile.eligibility.income) { score += 16; completedFields.push('eligibility'); }

    const docNames = docs.map((doc) => doc.name);
    const requiredDocs = scholarship.requiredDocuments || [];
    const readyDocs = requiredDocs.filter((doc) => docNames.some((name) => name.toLowerCase().includes(doc.toLowerCase()) || doc.toLowerCase().includes(name.toLowerCase()))).length;
    const docPercent = Math.round((readyDocs / Math.max(requiredDocs.length, 1)) * 28);
    score += docPercent;

    if (readyDocs === requiredDocs.length) { completedFields.push('documents'); }
    if (profile.eligibility.category) { score += 8; }
    if (score >= 85) { score += 5; }
    return Math.min(99, Math.max(0, score));
  }

  function getRequiredChecklist(profile, scholarship, docs) {
    const docNames = docs.map((doc) => doc.name.toLowerCase());
    const requiredDocs = scholarship.requiredDocuments || [];
    const missingDoc = requiredDocs.find((doc) => !docNames.some((name) => name.includes(doc.toLowerCase()) || doc.toLowerCase().includes(name)));
    const readiness = computeReadiness(profile, scholarship, docs);

    return [
      { status: 'done', label: 'Eligibility confirmed', description: 'Your profile matches the scholarship criteria.', action: 'Verified' },
      { status: 'done', label: 'Profile completed', description: 'Your student info is ready in ADIVYA.', action: 'Updated' },
      { status: missingDoc ? 'warning' : 'done', label: missingDoc || 'Aadhaar available', description: missingDoc ? `${missingDoc} is still missing.` : 'Your identity proof is ready.', action: missingDoc ? 'Upload' : 'Ready' },
      { status: missingDoc ? 'warning' : 'done', label: 'Documents verified', description: missingDoc ? 'Your required document set is incomplete.' : 'TrustVault is ready for reuse.', action: missingDoc ? 'Fix' : 'Ready' },
      { status: readiness >= 80 ? 'done' : 'warning', label: 'Complete application', description: 'Finish the submission fields and review.', action: readiness >= 80 ? 'Ready' : 'Continue' },
      { status: 'next', label: 'Review application', description: 'Verify before submitting.', action: 'Review' },
      { status: 'next', label: 'Submit', description: 'Submit once you confirm the details.', action: 'Submit' }
    ];
  }

  function getNextAction(profile, scholarship, docs) {
    const docNames = docs.map((doc) => doc.name.toLowerCase());
    const missingDoc = (scholarship.requiredDocuments || []).find((doc) => !docNames.some((name) => name.includes(doc.toLowerCase()) || doc.toLowerCase().includes(name)));
    if (missingDoc) {
      return { title: `Upload ${missingDoc}`, text: 'This is the only missing document preventing you from completing the application.', button: 'Fix This Now', action: 'upload', doc: missingDoc };
    }

    const profileComplete = Boolean(profile.basic.name && profile.education.course && profile.eligibility.category);
    if (!profileComplete) {
      return { title: 'Check Eligibility', text: 'ADIVYA still needs a quick profile check before continuing.', button: 'Check Eligibility', action: 'eligibility' };
    }

    const readiness = computeReadiness(profile, scholarship, docs);
    if (readiness < 85) {
      return { title: 'Continue Application', text: 'ADIVYA still has a few required steps before final review.', button: 'Continue Application', action: 'continue' };
    }

    return { title: 'Review & Submit', text: 'All major requirements are complete. This is your final confirmation step.', button: 'Review & Submit', action: 'review' };
  }

  function getBlocker(profile, scholarship, docs) {
    const docNames = docs.map((doc) => doc.name.toLowerCase());
    const missingDoc = (scholarship.requiredDocuments || []).find((doc) => !docNames.some((name) => name.includes(doc.toLowerCase()) || doc.toLowerCase().includes(name)));
    if (missingDoc) {
      return { title: `${missingDoc} is required.`, message: 'Without this document, your application may not be complete.', action: 'Resolve Now', type: 'document' };
    }

    const profileComplete = Boolean(profile.basic.name && profile.education.course && profile.eligibility.category);
    if (!profileComplete) {
      return { title: 'Profile check required.', message: 'ADIVYA needs a complete student profile to confirm eligibility.', action: 'Resolve Now', type: 'profile' };
    }

    return { title: 'Application is ready for final review.', message: 'Your profile, documents, and checklist are complete.', action: 'Run Final Check', type: 'ready' };
  }

  function getDocumentQuickFix(docs, scholarship) {
    const docNames = docs.map((doc) => doc.name.toLowerCase());
    const requiredDocs = scholarship.requiredDocuments || [];
    const missing = requiredDocs.find((doc) => !docNames.some((name) => name.includes(doc.toLowerCase()) || doc.toLowerCase().includes(name)));

    if (missing) {
      return `
        <div class="quickfix-panel">
          <div class="quickfix-card">
            <div>
              <strong>${missing}</strong>
              <div class="quickfix-meta">Status: ✕ Missing</div>
            </div>
            <div class="quickfix-actions">
              <button type="button" class="btn btn-primary small-btn" data-document-action="upload">Add Document</button>
              <button type="button" class="btn btn-secondary small-btn" data-document-action="view">View Requirements</button>
            </div>
          </div>
        </div>
      `;
    }

    return `
      <div class="quickfix-panel">
        <div class="quickfix-card">
          <div>
            <strong>${scholarship.requiredDocuments[0]}</strong>
            <div class="quickfix-meta">Status: ✓ Available in TrustVault</div>
          </div>
          <div class="quickfix-actions">
            <button type="button" class="btn btn-primary small-btn" data-document-action="use">Use This Document</button>
          </div>
        </div>
      </div>
    `;
  }

  function renderRescuePage() {
    const profile = loadProfileForRescue();
    const scholarship = getScholarshipOptions();
    const docs = loadTrustVaultDocuments();
    const readiness = computeReadiness(profile, scholarship, docs);
    const nextAction = getNextAction(profile, scholarship, docs);
    const blocker = getBlocker(profile, scholarship, docs);
    const timeParts = calculateTimeParts(scholarship.deadline);
    const checklist = getRequiredChecklist(profile, scholarship, docs);

    const countdownValue = document.getElementById('countdownValue');
    const countdownLabel = document.getElementById('countdownLabel');
    const summary = document.getElementById('scholarshipSummary');
    const nextActionTitle = document.getElementById('nextActionTitle');
    const nextActionText = document.getElementById('nextActionText');
    const nextActionButton = document.getElementById('nextActionButton');
    const checklistRoot = document.getElementById('rescueChecklist');
    const readinessValue = document.getElementById('rescueReadinessValue');
    const progressBar = document.getElementById('rescueProgressBar');
    const blockerContent = document.getElementById('blockerContent');
    const quickFix = document.getElementById('documentQuickFix');
    const protectionStatus = document.getElementById('protectionStatus');
    const notificationList = document.getElementById('notificationList');
    const notificationBadge = document.getElementById('notificationBadge');
    const timeline = document.getElementById('rescueTimeline');
    const reviewChecklist = document.getElementById('reviewChecklist');

    if (countdownValue) {
      if (timeParts.dead) {
        countdownValue.textContent = 'Deadline Passed';
        countdownLabel.textContent = 'Review alternatives';
      } else if (timeParts.days > 0) {
        countdownValue.textContent = `${timeParts.days}d ${timeParts.hours}h`;
        countdownLabel.textContent = 'remaining';
      } else {
        countdownValue.textContent = `${timeParts.hours}h ${timeParts.minutes}m`;
        countdownLabel.textContent = 'remaining';
      }
    }

    if (summary) {
      summary.innerHTML = `
        <div class="summary-grid-list">
          <div class="summary-row"><span>Scholarship</span><strong>${scholarship.name}</strong></div>
          <div class="summary-row"><span>Provider</span><strong>${scholarship.provider}</strong></div>
          <div class="summary-row"><span>Amount</span><strong>₹${scholarship.amount.toLocaleString()}</strong></div>
          <div class="summary-row"><span>Deadline</span><strong>${new Date(scholarship.deadline).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}</strong></div>
          <div class="summary-row"><span>Eligibility</span><strong>✓ Eligible</strong></div>
          <div class="summary-row"><span>Application Readiness</span><strong>${readiness}%</strong></div>
        </div>
      `;
    }

    if (nextActionTitle) nextActionTitle.textContent = nextAction.title;
    if (nextActionText) nextActionText.textContent = nextAction.text;
    if (nextActionButton) {
      nextActionButton.textContent = nextAction.button;
      nextActionButton.onclick = () => {
        if (nextAction.action === 'upload') {
          window.location.href = 'documents.html';
        } else if (nextAction.action === 'eligibility') {
          window.location.href = 'eligibility.html';
        } else if (nextAction.action === 'continue') {
          window.location.href = 'eligibility.html';
        } else {
          document.getElementById('finalReviewCard')?.classList.remove('hidden');
          document.getElementById('finalReviewCard')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      };
    }

    if (checklistRoot) {
      checklistRoot.innerHTML = checklist.map((item) => `
        <div class="checklist-item">
          <span class="checklist-status">${item.status === 'done' ? '✓' : item.status === 'warning' ? '⚠' : '○'}</span>
          <div>
            <strong>${item.label}</strong>
            <span>${item.description}</span>
          </div>
          <span class="checklist-action">${item.action}</span>
        </div>
      `).join('');
    }

    if (readinessValue) readinessValue.textContent = `${readiness}%`;
    if (progressBar) progressBar.style.width = `${readiness}%`;

    if (blockerContent) {
      blockerContent.innerHTML = `
        <div class="blocker-content">
          <strong>${blocker.title}</strong>
          <p>${blocker.message}</p>
          <button type="button" class="btn btn-primary small-btn" id="resolveBlockerBtn">${blocker.action}</button>
        </div>
      `;
      document.getElementById('resolveBlockerBtn')?.addEventListener('click', () => {
        if (blocker.type === 'document') window.location.href = 'documents.html';
        else if (blocker.type === 'profile') window.location.href = 'profile.html';
        else document.getElementById('finalReviewCard')?.classList.remove('hidden');
      });
    }

    if (quickFix) quickFix.innerHTML = getDocumentQuickFix(docs, scholarship);
    quickFix?.querySelectorAll('[data-document-action]').forEach((button) => {
      button.addEventListener('click', () => {
        const action = button.dataset.documentAction;
        if (action === 'upload') window.location.href = 'documents.html';
        if (action === 'view') {
          const response = document.getElementById('aiResponse');
          if (response) response.textContent = `${scholarship.requiredDocuments[0]} is required for ${scholarship.name}. ADIVYA recommends uploading it before the final review.`;
        }
        if (action === 'use') {
          const response = document.getElementById('aiResponse');
          if (response) response.textContent = 'Your selected document is ready for use. Please confirm before sharing it with the scholarship provider.';
        }
      });
    });

    if (protectionStatus) {
      const readyState = readiness >= 80 ? 'Ready for final review' : 'Action Required';
      protectionStatus.innerHTML = `
        <div class="protection-status">
          <div>
            <strong>Application Protection Check</strong>
            <span>${readyState}</span>
          </div>
          <button type="button" class="btn btn-secondary small-btn" id="runProtectionBtn">Run Final Check</button>
        </div>
      `;
      document.getElementById('runProtectionBtn')?.addEventListener('click', () => {
        const response = document.getElementById('aiResponse');
        if (response) response.textContent = '✓ Completeness check ✓ Consistency check ✓ Required-document check ✓ Deadline check ✓ Basic compliance check — Application Ready.';
        document.getElementById('finalReviewCard')?.classList.remove('hidden');
      });
    }

    if (reviewChecklist) {
      reviewChecklist.innerHTML = [
        '✓ Personal information',
        '✓ Education details',
        '✓ Scholarship details',
        '✓ Required documents',
        '✓ Eligibility',
        '✓ Application completeness'
      ].map((item) => `<li>${item}</li>`).join('');
    }

    document.getElementById('goBackButton')?.addEventListener('click', () => document.getElementById('finalReviewCard')?.classList.add('hidden'));
    document.getElementById('confirmSubmitButton')?.addEventListener('click', () => {
      const confirmationCard = document.getElementById('confirmationCard');
      const submittedName = document.getElementById('submittedScholarshipName');
      const dateText = document.getElementById('submittedDateText');

      if (confirmationCard) confirmationCard.classList.remove('hidden');
      if (submittedName) submittedName.textContent = scholarship.name;
      if (dateText) dateText.textContent = `Submitted: ${new Date().toLocaleString('en-GB', { day: 'numeric', month: 'short', year: 'numeric', hour: 'numeric', minute: '2-digit' })}`;
      document.getElementById('finalReviewCard')?.classList.add('hidden');

      const state = {
        submitted: true,
        scholarshipName: scholarship.name,
        submittedAt: new Date().toISOString(),
        readiness,
        nextAction: nextAction.title
      };
      saveRescueState(state);
    });

    if (timeline) {
      const steps = ['NOW', 'Fix blocker', 'Complete application', 'Run protection check', 'Review', 'Submit', 'TRACK'];
      timeline.innerHTML = steps.map((step, index) => `
        <div class="timeline-step ${index === 0 ? 'active' : ''}">${step}</div>
        ${index < steps.length - 1 ? '<div class="timeline-arrow">↓</div>' : ''}
      `).join('');
    }

    const notifications = [
      `Urgent: Your scholarship deadline is approaching.`,
      `Your scholarship deadline is in ${timeParts.days > 0 ? `${timeParts.days} days` : `${timeParts.hours} hours`}.`,
      `${missingDocNameFromScholarship(scholarship, docs)} still missing.`,
      `Your application is ${readiness}% ready.`
    ];

    if (notificationList) {
      notificationList.innerHTML = notifications.map((item) => `
        <div class="notification-item">🔔 <span>${item}</span></div>
      `).join('');
    }
    if (notificationBadge) notificationBadge.textContent = String(notifications.length);

    const rescueState = loadRescueState();
    if (rescueState.submitted) {
      document.getElementById('confirmationCard')?.classList.remove('hidden');
      document.getElementById('submittedScholarshipName').textContent = rescueState.scholarshipName || scholarship.name;
      document.getElementById('submittedDateText').textContent = `Submitted: ${new Date(rescueState.submittedAt).toLocaleString('en-GB', { day: 'numeric', month: 'short', year: 'numeric', hour: 'numeric', minute: '2-digit' })}`;
    }

    document.getElementById('viewApplicationButton')?.addEventListener('click', () => window.location.href = 'dashboard.html');
    document.getElementById('profileEditButton')?.addEventListener('click', () => window.location.href = 'profile.html');
    document.getElementById('logoutButton')?.addEventListener('click', () => {
      localStorage.removeItem(PROFILE_STORAGE_KEY);
      window.location.href = 'login.html';
    });

    const languageSelect = document.getElementById('rescueLanguage');
    const currentLanguage = localStorage.getItem(LANGUAGE_KEY) || 'en';
    if (languageSelect) {
      languageSelect.value = currentLanguage;
      languageSelect.addEventListener('change', (event) => {
        localStorage.setItem(LANGUAGE_KEY, event.target.value);
      });
    }

    document.querySelectorAll('.nav-item, .mobile-item').forEach((button) => {
      button.addEventListener('click', () => {
        const target = button.dataset.nav;
        if (target === 'home') window.location.href = 'index.html';
        if (target === 'dashboard') window.location.href = 'dashboard.html';
        if (target === 'opportunities') window.location.href = 'opportunities.html';
        if (target === 'documents') window.location.href = 'documents.html';
        if (target === 'rescue') window.location.href = 'rescue.html';
        if (target === 'profile') window.location.href = 'profile.html';
      });
    });

    document.getElementById('aiAssistantToggle')?.addEventListener('click', () => {
      document.getElementById('aiPanel')?.classList.toggle('hidden');
    });
    document.getElementById('closeAiPanel')?.addEventListener('click', () => {
      document.getElementById('aiPanel')?.classList.add('hidden');
    });
    document.getElementById('closeNotificationPanel')?.addEventListener('click', () => {
      document.getElementById('notificationPanel')?.classList.add('hidden');
    });
    document.querySelector('.notification-toggle')?.addEventListener('click', () => {
      document.getElementById('notificationPanel')?.classList.toggle('hidden');
    });

    document.querySelectorAll('.ai-question').forEach((button) => {
      button.addEventListener('click', () => {
        const question = button.dataset.question || 'What should I do first?';
        const response = document.getElementById('aiResponse');
        if (!response) return;

        const answerMap = {
          'What should I do first?': `Your next action is to ${nextAction.title.toLowerCase()}. ADIVYA is prioritizing the missing requirement that most affects your deadline.`,
          'What is blocking my application?': blocker.message,
          'Which document is missing?': `${getMissingDocumentName(scholarship, docs) || 'Your requirements are already in place'}.`,
          'How much time do I have?': `${timeParts.days > 0 ? `${timeParts.days} days and ${timeParts.hours} hours` : `${timeParts.hours} hours and ${timeParts.minutes} minutes`} left before the deadline.`,
          'Am I ready to submit?': readiness >= 80 ? 'Yes. ADIVYA is ready for a final review and confirmation.' : 'Not yet. Complete the missing requirement before you submit.'
        };
        response.textContent = answerMap[question] || 'ADIVYA is focusing on the next high-impact action for your application.';
      });
    });

    document.getElementById('rescueLanguage')?.addEventListener('change', (event) => {
      localStorage.setItem(LANGUAGE_KEY, event.target.value);
    });
  }

  function missingDocNameFromScholarship(scholarship, docs) {
    const docNames = docs.map((doc) => doc.name.toLowerCase());
    const requiredDoc = (scholarship.requiredDocuments || []).find((doc) => !docNames.some((name) => name.includes(doc.toLowerCase()) || doc.toLowerCase().includes(name)));
    return requiredDoc || 'No major document gap';
  }

  function getMissingDocumentName(scholarship, docs) {
    return missingDocNameFromScholarship(scholarship, docs);
  }

  renderRescuePage();
}

if (window.location.pathname.endsWith('journey.html')) {
  const PROFILE_STORAGE_KEY = 'adivya_profile_data';
  const TRUSTVAULT_KEY = 'adivya_trustvault_documents';
  const APPLICATION_STATE_KEY = 'adivya_application_state';
  const RENEWAL_STATE_KEY = 'adivya_renewal_state';
  const LANGUAGE_KEY = 'adivya_language';

  function loadJourneyProfile() {
    try {
      const raw = JSON.parse(localStorage.getItem(PROFILE_STORAGE_KEY) || '{}');
      return {
        basic: { name: raw.basic?.name || 'Student', state: raw.basic?.state || 'Telangana', district: raw.basic?.district || 'Hyderabad' },
        education: { course: raw.education?.course || 'B.Tech', institution: raw.education?.institution || 'Your Institution', year: raw.education?.year || '2nd Year', level: raw.education?.level || 'Undergraduate' },
        eligibility: { income: raw.eligibility?.income || '₹1 – ₹3 LPA', category: raw.eligibility?.category || 'OBC', residence: raw.eligibility?.residence || 'Telangana' },
        preferences: raw.preferences || []
      };
    } catch (error) {
      return {
        basic: { name: 'Student', state: 'Telangana', district: 'Hyderabad' },
        education: { course: 'B.Tech', institution: 'Your Institution', year: '2nd Year', level: 'Undergraduate' },
        eligibility: { income: '₹1 – ₹3 LPA', category: 'OBC', residence: 'Telangana' },
        preferences: []
      };
    }
  }

  function loadJourneyDocuments() {
    try {
      return JSON.parse(localStorage.getItem(TRUSTVAULT_KEY) || '[]');
    } catch (error) {
      return [];
    }
  }

  function loadJourneyApplicationState() {
    try {
      return JSON.parse(localStorage.getItem(APPLICATION_STATE_KEY) || '{}');
    } catch (error) {
      return {};
    }
  }

  function loadJourneyRenewalState() {
    try {
      return JSON.parse(localStorage.getItem(RENEWAL_STATE_KEY) || '{}');
    } catch (error) {
      return {};
    }
  }

  function getJourneyMilestones(profile, docs, applicationState, renewalState) {
    const hasProfile = Boolean(profile.basic.name && profile.education.course && profile.education.institution);
    const hasEligibility = Boolean(profile.eligibility.category && profile.eligibility.income);
    const opportunityFound = profile.preferences.length > 0 || applicationState.scholarshipId || profile.education.course;
    const docsReady = docs.length > 0 || applicationState.updatedAt;
    const appSubmitted = Boolean(applicationState.submittedAt || applicationState.updatedAt);
    const awardReceived = Boolean(applicationState.scholarshipId && applicationState.updatedAt && (applicationState.status === 'submitted' || applicationState.result === 'Submitted'));
    const renewalDone = Boolean(renewalState.savedAt);
    const achievement = Boolean(renewalDone || awardReceived);

    return [
      { id: 'roots', name: '🌱 Seed / Roots', label: 'Profile + Eligibility', description: 'Your journey begins.', complete: hasProfile && hasEligibility, details: ['✓ Profile completed', '✓ Eligibility checked'], button: 'View Profile', action: 'profile', date: 'Today' },
      { id: 'sapling', name: '🌿 Sapling', label: 'Application Prepared + Submitted', description: 'Opportunity found and documents ready.', complete: opportunityFound && docsReady, details: ['✓ Opportunity found', '✓ Documents prepared', appSubmitted ? '✓ Application submitted' : '○ Application submitted'], button: 'Continue Application', action: 'application', date: appSubmitted ? 'Submitted' : 'In progress' },
      { id: 'growing-tree', name: '🌳 Growing Tree', label: 'Application Submitted + Protected', description: 'Your scholarship path is active.', complete: appSubmitted, details: ['✓ Application submitted', '✓ Application protected'], button: 'View Application', action: 'applications', date: appSubmitted ? 'Protected' : 'Waiting' },
      { id: 'mature-tree', name: '🌳✨ Mature Tree', label: 'Scholarship Awarded + Renewal Secured', description: 'Your support is growing.', complete: awardReceived || renewalDone, details: ['✓ Scholarship awarded', renewalDone ? '✓ Renewal completed' : '○ Renewal completed'], button: 'View Renewal', action: 'renewal', date: renewalDone ? 'Renewed' : 'Awarded' },
      { id: 'achievement', name: '🏆 Achievement', label: 'Educational Success', description: 'Achievement unlocked.', complete: achievement, details: ['Achievement unlocked'], button: 'View Achievement', action: 'achievement', date: achievement ? 'Unlocked' : 'Pending' }
    ];
  }

  function calculateJourneyProgress(milestones) {
    const completeCount = milestones.filter((m) => m.complete).length;
    return Math.round((completeCount / milestones.length) * 100);
  }

  function buildJourneyTree(milestones, progress) {
    const tree = document.getElementById('treeVisualization');
    if (!tree) return;

    const sequence = milestones.map((milestone, index) => {
      const isActive = milestone.complete || index === milestones.findIndex((item) => !item.complete);
      return `
        <div class="tree-stage-card ${milestone.complete ? 'complete' : index === milestones.findIndex((item) => !item.complete) ? 'current' : ''}" data-stage="${milestone.id}" role="button" tabindex="0" aria-label="${milestone.name}">
          <span class="tree-stage-icon">${milestone.name.split(' ')[0] === '🌱' ? '🌱' : milestone.name.split(' ')[0] === '🌿' ? '🌿' : milestone.name.split(' ')[0] === '🌳' || milestone.name.includes('Mature') ? '🌳' : '🏆'}</span>
          <strong>${milestone.label}</strong>
          <small>${milestone.description}</small>
        </div>
      `;
    }).join('');

    const branchText = progress >= 100 ? 'Achievement unlocked.' : progress >= 80 ? 'New Path' : 'Journey continues';

    tree.innerHTML = `
      <div class="tree-canvas">
        <div class="tree-backdrop">
          <div class="backdrop-orbit orbit-one"></div>
          <div class="backdrop-orbit orbit-two"></div>
          <div class="backdrop-particle particle-a"></div>
          <div class="backdrop-particle particle-b"></div>
          <div class="backdrop-particle particle-c"></div>
        </div>
        <div class="tree-root ${progress >= 20 ? 'visible' : ''}"></div>
        <div class="tree-trunk ${progress >= 45 ? 'grown' : ''}"></div>
        <div class="tree-branch branch-left ${progress >= 60 ? 'grown' : ''}"></div>
        <div class="tree-branch branch-right ${progress >= 75 ? 'grown' : ''}"></div>
        <div class="tree-leaves ${progress >= 80 ? 'full' : ''}"></div>
        <div class="tree-glow ${progress >= 100 ? 'active' : ''}"></div>
      </div>
      <div class="tree-stage-grid">${sequence}</div>
      <div class="tree-path-label">${branchText}</div>
    `;

    tree.querySelectorAll('.tree-stage-card').forEach((card) => {
      card.addEventListener('click', () => openJourneyStageModal(card.dataset.stage, milestones));
      card.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          openJourneyStageModal(card.dataset.stage, milestones);
        }
      });
    });
  }

  function openJourneyStageModal(stageId, milestones) {
    const stage = milestones.find((item) => item.id === stageId) || milestones[0];
    const title = document.getElementById('stageModalTitle');
    const body = document.getElementById('stageModalBody');
    const eyebrow = document.getElementById('stageModalEyebrow');
    const actionButton = document.getElementById('stageModalActionButton');
    const modal = document.getElementById('journeyStageModal');

    if (!modal || !title || !body || !actionButton) return;

    eyebrow.textContent = stage.label || 'STAGE';
    title.textContent = stage.name;
    body.innerHTML = stage.details.map((detail) => `<div class="modal-check-item">${detail}</div>`).join('');
    actionButton.textContent = stage.button;
    actionButton.onclick = () => {
      const targetMap = {
        profile: 'profile.html',
        application: 'applications.html',
        applications: 'applications.html',
        renewal: 'recovery.html',
        achievement: 'dashboard.html'
      };
      const target = targetMap[stage.action] || 'dashboard.html';
      window.location.href = target;
    };
    modal.classList.remove('hidden');
  }

  function getCurrentJourneyStage(milestones) {
    const firstIncomplete = milestones.find((item) => !item.complete);
    if (firstIncomplete) {
      return firstIncomplete;
    }
    return milestones[milestones.length - 1];
  }

  function renderMilestones(milestones) {
    const container = document.getElementById('journeyMilestones');
    if (!container) return;

    container.innerHTML = milestones.map((milestone) => `
      <div class="journey-milestone ${milestone.complete ? 'done' : ''}">
        <span class="milestone-check">${milestone.complete ? '✓' : '○'}</span>
        <div>
          <strong>${milestone.label}</strong>
          <small>${milestone.description}</small>
        </div>
        <span class="milestone-date">${milestone.date}</span>
      </div>
    `).join('');
  }

  function renderJourneyInsight(profile, milestones, progress) {
    const container = document.getElementById('journeyInsight');
    if (!container) return;

    let message = 'Your profile is complete and your documents are ready. Your next milestone is submitting your application.';
    if (progress < 40) {
      message = 'Your journey is beginning. Complete your profile and eligibility check to unlock the next stage of your scholarship path.';
    } else if (progress < 75) {
      message = 'You are making steady progress. Focus on the next application step to help your educational path continue growing.';
    } else if (progress < 100) {
      message = 'Your tree is growing well. One more step will move you to the next milestone and strengthen your scholarship journey.';
    }

    container.innerHTML = `
      <div class="insight-quote">“Your journey is moving forward.”</div>
      <p>${message}</p>
    `;
  }

  function buildAchievements(milestones) {
    const achievements = [
      { id: 'first-step', name: '🌱 First Step', unlocked: milestones[0].complete, description: 'Profile completed', date: milestones[0].complete ? '26 Sep 2026' : 'Locked' },
      { id: 'opportunity-finder', name: '🔎 Opportunity Finder', unlocked: milestones[1].complete, description: 'First scholarship discovered', date: milestones[1].complete ? '26 Sep 2026' : 'Locked' },
      { id: 'prepared', name: '📄 Prepared', unlocked: milestones[1].complete, description: 'All required documents ready', date: milestones[1].complete ? '27 Sep 2026' : 'Locked' },
      { id: 'protected', name: '🛡 Protected', unlocked: milestones[2].complete, description: 'Application protection completed', date: milestones[2].complete ? '28 Sep 2026' : 'Locked' },
      { id: 'applicant', name: '🎓 Applicant', unlocked: milestones[2].complete, description: 'First application submitted', date: milestones[2].complete ? '29 Sep 2026' : 'Locked' },
      { id: 'scholar', name: '🏆 Scholar', unlocked: milestones[3].complete, description: 'Scholarship awarded', date: milestones[3].complete ? '30 Sep 2026' : 'Locked' },
      { id: 'renewal-ready', name: '🔄 Renewal Ready', unlocked: milestones[4].complete, description: 'First renewal completed', date: milestones[4].complete ? '01 Oct 2026' : 'Locked' }
    ];

    return achievements;
  }

  function renderAchievements(achievements) {
    const container = document.getElementById('achievementBadges');
    const detail = document.getElementById('achievementDetail');
    if (!container) return;

    container.innerHTML = achievements.map((badge) => `
      <button type="button" class="achievement-badge ${badge.unlocked ? 'unlocked' : 'locked'}" data-achievement="${badge.id}">
        <span>${badge.name}</span>
        <small>${badge.unlocked ? 'Unlocked' : 'Locked'}</small>
      </button>
    `).join('');

    container.querySelectorAll('.achievement-badge').forEach((button) => {
      button.addEventListener('click', () => {
        const badge = achievements.find((item) => item.id === button.dataset.achievement);
        if (!badge) return;
        detail.innerHTML = `
          <div class="achievement-detail-box">
            <strong>${badge.name}</strong>
            <p>${badge.description}</p>
            <span>${badge.unlocked ? `Unlocked on ${badge.date}` : 'Locked - complete the required milestone to unlock this achievement.'}</span>
          </div>
        `;
      });
    });
  }

  function renderFamilyPrideCard(profile, milestones, progress) {
    const container = document.getElementById('familyPrideCard');
    if (!container) return;

    const scholarshipName = profile.education.course && profile.education.institution ? 'National Merit Scholarship' : 'Your scholarship journey';
    const achievementText = progress >= 100 ? 'Scholarship awarded' : progress >= 80 ? 'Application successfully submitted' : 'Your scholarship journey is growing.';

    container.innerHTML = `
      <div class="family-card-inner">
        <strong>Family Pride</strong>
        <p>“Your scholarship journey is growing.”</p>
        <div class="family-meta">
          <span>Scholarship: ${scholarshipName}</span>
          <span>Achievement: ${achievementText}</span>
        </div>
        <small>Keep going — every milestone brings you closer to your goal.</small>
      </div>
    `;
  }

  function renderJourneyStats(profile, docs, applicationState, renewalState) {
    const container = document.getElementById('journeyStats');
    if (!container) return;

    const stats = [
      { label: 'Scholarships Discovered', value: String(Math.max(1, profile.preferences.length + 5)) },
      { label: 'Applications Submitted', value: applicationState.submittedAt ? '2' : '1' },
      { label: 'Scholarships Awarded', value: applicationState.scholarshipId ? '1' : '0' },
      { label: 'Renewals Completed', value: renewalState.savedAt ? '1' : '0' },
      { label: 'Documents Verified', value: String(docs.length || 9) }
    ];

    container.innerHTML = stats.map((stat) => `
      <div class="journey-stat-item">
        <strong>${stat.value}</strong>
        <span>${stat.label}</span>
      </div>
    `).join('');
  }

  function renderJourneyHistory(profile, applicationState, renewalState) {
    const container = document.getElementById('journeyHistory');
    if (!container) return;

    const events = [
      { date: '26 Sep 2026', event: 'Profile completed' },
      { date: '26 Sep 2026', event: 'Eligibility checked' },
      { date: '27 Sep 2026', event: 'Scholarship application started' },
      { date: '28 Sep 2026', event: 'Documents verified' },
      { date: '29 Sep 2026', event: 'Application submitted' },
      { date: '30 Sep 2026', event: 'Scholarship awarded' },
      { date: '01 Oct 2026', event: 'Renewal completed' }
    ];

    if (applicationState.updatedAt) {
      events[4].event = 'Application updated';
    }
    if (renewalState.savedAt) {
      events[6].event = 'Renewal prepared';
    }

    container.innerHTML = events.map((item) => `
      <div class="history-event"><span>${item.date}</span><strong>${item.event}</strong></div>
    `).join('');
  }

  function setupJourneyEvents() {
    document.getElementById('profileEditButton')?.addEventListener('click', () => window.location.href = 'profile.html');
    document.getElementById('logoutButton')?.addEventListener('click', () => {
      localStorage.removeItem(PROFILE_STORAGE_KEY);
      window.location.href = 'login.html';
    });
    document.getElementById('closeStageModal')?.addEventListener('click', () => document.getElementById('journeyStageModal')?.classList.add('hidden'));

    document.getElementById('continueJourneyButton')?.addEventListener('click', () => {
      const target = document.getElementById('nextMilestoneLabel')?.textContent || 'applications.html';
      if (target.toLowerCase().includes('application')) window.location.href = 'applications.html';
      else if (target.toLowerCase().includes('profile')) window.location.href = 'profile.html';
      else if (target.toLowerCase().includes('renewal')) window.location.href = 'recovery.html';
      else window.location.href = 'applications.html';
    });

    document.getElementById('secondaryJourneyButton')?.addEventListener('click', () => {
      window.location.href = 'applications.html';
    });

    document.getElementById('createAchievementCardButton')?.addEventListener('click', () => {
      const ai = document.getElementById('aiResponse');
      if (ai) ai.textContent = 'Achievement card ready. Your journey progress can be shared as a visual milestone story without exposing sensitive information.';
    });

    document.getElementById('aiAssistantToggle')?.addEventListener('click', () => {
      document.getElementById('aiPanel')?.classList.toggle('hidden');
    });
    document.getElementById('closeAiPanel')?.addEventListener('click', () => {
      document.getElementById('aiPanel')?.classList.add('hidden');
    });
    document.getElementById('closeNotificationPanel')?.addEventListener('click', () => {
      document.getElementById('notificationPanel')?.classList.add('hidden');
    });
    document.querySelector('.notification-toggle')?.addEventListener('click', () => {
      document.getElementById('notificationPanel')?.classList.toggle('hidden');
    });
    document.getElementById('notificationBadge')?.addEventListener('click', () => {
      document.getElementById('notificationPanel')?.classList.toggle('hidden');
    });

    document.querySelectorAll('.ai-question').forEach((button) => {
      button.addEventListener('click', () => {
        const question = button.dataset.question || 'What is my next milestone?';
        const response = document.getElementById('aiResponse');
        if (!response) return;

        const map = {
          'What is my next milestone?': 'Your next milestone is submitting your scholarship application and completing the final protection review.',
          'How far have I come?': 'Your journey is making strong progress. Your profile and documents are in place and your tree is growing.',
          'What do I need to do next?': 'Finish the remaining application checks and confirm the last review step before submission.',
          'When will my tree grow?': 'Your tree grows as milestones are completed: profile, eligibility, application, award, renewal, and achievement.',
          'Which achievement am I closest to?': 'You are closest to the Applicant achievement; complete the final application review to unlock it.'
        };
        response.textContent = map[question] || 'ADIVYA is checking the most relevant next step in your journey.';
      });
    });

    document.querySelectorAll('.nav-item').forEach((button) => {
      button.addEventListener('click', () => {
        const target = button.dataset.nav;
        if (target === 'home') window.location.href = 'index.html';
        if (target === 'dashboard') window.location.href = 'dashboard.html';
        if (target === 'opportunities') window.location.href = 'opportunities.html';
        if (target === 'applications') window.location.href = 'applications.html';
        if (target === 'documents') window.location.href = 'documents.html';
        if (target === 'journey') window.location.href = 'journey.html';
      });
    });

    const languageSelect = document.getElementById('journeyLanguage');
    if (languageSelect) {
      const currentLanguage = localStorage.getItem(LANGUAGE_KEY) || 'en';
      languageSelect.value = currentLanguage;
      languageSelect.addEventListener('change', (event) => localStorage.setItem(LANGUAGE_KEY, event.target.value));
    }

    const notifications = [
      '🌱 Your profile is complete — your journey has begun.',
      '🌿 Your application is ready for the next step.',
      '🌳 Your scholarship was awarded — your journey has grown.',
      '✨ Your renewal milestone is approaching.'
    ];
    const notificationList = document.getElementById('notificationList');
    if (notificationList) {
      notificationList.innerHTML = notifications.map((item) => `
        <div class="notification-item"><button type="button" class="notification-link">🔔 <span>${item}</span></button></div>
      `).join('');
      notificationList.querySelectorAll('.notification-link').forEach((button) => {
        button.addEventListener('click', () => {
          document.getElementById('journeyMilestones')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
      });
    }
    const badge = document.getElementById('notificationBadge');
    if (badge) badge.textContent = String(notifications.length);
  }

  function renderJourneyPage() {
    const profile = loadJourneyProfile();
    const docs = loadJourneyDocuments();
    const applicationState = loadJourneyApplicationState();
    const renewalState = loadJourneyRenewalState();
    const milestones = getJourneyMilestones(profile, docs, applicationState, renewalState);
    const progress = calculateJourneyProgress(milestones);
    const currentStage = getCurrentJourneyStage(milestones);

    const studentName = document.getElementById('studentJourneyName');
    if (studentName) studentName.textContent = profile.basic.name || 'Student';

    const progressValue = document.getElementById('journeyProgressValue');
    const progressBar = document.getElementById('journeyProgressBar');
    const progressText = document.getElementById('journeyProgressText');
    if (progressValue) progressValue.textContent = `${progress}%`;
    if (progressBar) progressBar.style.width = `${progress}%`;
    if (progressText) progressText.textContent = progress >= 100 ? 'Your journey is thriving.' : 'Your progress is built one step at a time.';

    const currentStageLabel = document.getElementById('currentStageLabel');
    if (currentStageLabel) currentStageLabel.textContent = progress >= 100 ? 'Achievement Unlocked' : progress >= 80 ? 'Growing Scholar' : progress >= 55 ? 'Scholar in Motion' : progress >= 25 ? 'Scholar in Formation' : 'Emerging Scholar';

    const currentStageName = document.getElementById('currentStageName');
    const currentStageSummary = document.getElementById('currentStageSummary');
    const nextMilestoneLabel = document.getElementById('nextMilestoneLabel');
    const targetMilestoneTitle = document.getElementById('targetMilestoneTitle');
    const targetMilestoneProgress = document.getElementById('targetMilestoneProgress');
    const continueJourneyButton = document.getElementById('continueJourneyButton');
    const secondaryJourneyButton = document.getElementById('secondaryJourneyButton');

    if (currentStageName) currentStageName.textContent = currentStage.name;
    if (currentStageSummary) currentStageSummary.textContent = currentStage.description;
    if (nextMilestoneLabel) {
      nextMilestoneLabel.textContent = currentStage.complete ? 'Continue to the next milestone.' : currentStage.id === 'roots' ? 'Complete your profile.' : currentStage.id === 'sapling' ? 'Complete your application.' : currentStage.id === 'growing-tree' ? 'Track your application.' : currentStage.id === 'mature-tree' ? 'Prepare renewal.' : 'View achievement.';
    }
    if (targetMilestoneTitle) {
      targetMilestoneTitle.textContent = currentStage.complete ? 'Keep growing your scholarship journey' : 'Submit your scholarship application';
    }
    if (targetMilestoneProgress) targetMilestoneProgress.textContent = `${milestones.filter((item) => item.complete).length} / ${milestones.length} steps complete`;
    if (continueJourneyButton) continueJourneyButton.textContent = currentStage.complete ? 'Continue' : 'Continue';
    if (secondaryJourneyButton) secondaryJourneyButton.textContent = currentStage.complete ? 'Continue Journey' : 'Continue Journey';

    buildJourneyTree(milestones, progress);
    renderMilestones(milestones);
    renderJourneyInsight(profile, milestones, progress);
    renderAchievements(buildAchievements(milestones));
    renderFamilyPrideCard(profile, milestones, progress);
    renderJourneyStats(profile, docs, applicationState, renewalState);
    renderJourneyHistory(profile, applicationState, renewalState);
    setupJourneyEvents();
  }

  renderJourneyPage();
}

if (window.location.pathname.endsWith('recovery.html')) {
  const PROFILE_STORAGE_KEY = 'adivya_profile_data';
  const TRUSTVAULT_KEY = 'adivya_trustvault_documents';
  const LANGUAGE_KEY = 'adivya_language';
  const RENEWAL_STATE_KEY = 'adivya_renewal_state';

  const fallbackDocuments = [
    { name: 'Marks Memo', status: 'verified', type: 'Education' },
    { name: 'Income Certificate', status: 'needs_attention', type: 'Income' },
    { name: 'Aadhaar / Identity Proof', status: 'verified', type: 'Identity' },
    { name: 'Bonafide Certificate', status: 'expiring_soon', type: 'Education' }
  ];

  function loadProfileForRecovery() {
    try {
      const raw = JSON.parse(localStorage.getItem(PROFILE_STORAGE_KEY) || '{}');
      return {
        basic: { name: raw.basic?.name || '', state: raw.basic?.state || '' },
        education: { course: raw.education?.course || '', institution: raw.education?.institution || '', year: raw.education?.year || '', level: raw.education?.level || '' },
        eligibility: { income: raw.eligibility?.income || '', category: raw.eligibility?.category || '', residence: raw.eligibility?.residence || '' },
        preferences: raw.preferences || []
      };
    } catch (error) {
      return {
        basic: { name: '', state: '' },
        education: { course: '', institution: '', year: '', level: '' },
        eligibility: { income: '', category: '', residence: '' },
        preferences: []
      };
    }
  }

  function loadDocumentsForRecovery() {
    try {
      const raw = JSON.parse(localStorage.getItem(TRUSTVAULT_KEY) || '[]');
      return Array.isArray(raw) && raw.length ? raw : fallbackDocuments;
    } catch (error) {
      return fallbackDocuments;
    }
  }

  function getIncomeNumber(value) {
    const digits = String(value || '').replace(/[^0-9]/g, '');
    return Number(digits || 0);
  }

  function getAlternativeOpportunities(profile, documents) {
    const courseLower = String(profile.education.course || '').toLowerCase();
    const category = profile.eligibility.category || 'General';
    const incomeNumber = getIncomeNumber(profile.eligibility.income);
    const location = profile.eligibility.residence || profile.basic.state || 'Telangana';
    const hasMarksCert = documents.some((doc) => doc.name && doc.name.toLowerCase().includes('marks'));
    const base = [
      {
        id: 'telangana-stem',
        name: 'Telangana STEM Recovery Grant',
        provider: 'Telangana Education Foundation',
        amount: 40000,
        deadline: '2026-10-18',
        match: 92,
        requirementTags: ['Course match', 'Income match', 'Location match'],
        requiredDocuments: ['Marks Memo', 'Income Certificate', 'Aadhaar / Identity Proof'],
        type: 'strong',
        reason: 'Your course and income profile fit this support very closely.'
      },
      {
        id: 'digital-access',
        name: 'Digital Access & Inclusion Award',
        provider: 'Nirmaan Education Trust',
        amount: 35000,
        deadline: '2026-10-12',
        match: 87,
        requirementTags: ['Course match', 'Income match', 'Needs verification'],
        requiredDocuments: ['Income Certificate', 'Bonafide Certificate'],
        type: 'deadline',
        reason: 'This opportunity is strongly aligned with your current course and district support needs.'
      },
      {
        id: 'merit-need',
        name: 'Merit + Need Support Grant',
        provider: 'National Student Support Council',
        amount: 30000,
        deadline: '2026-10-23',
        match: 80,
        requirementTags: ['Course match', 'Needs verification'],
        requiredDocuments: ['Marks Memo', 'Income Certificate'],
        type: 'verify',
        reason: 'ADIVYA sees a good fit, but one document or income check needs confirmation.'
      }
    ];

    return base.filter((item) => {
      const courseMatch = courseLower.includes('b.tech') || item.name.toLowerCase().includes('stem') || item.name.toLowerCase().includes('grant');
      const incomeEligible = incomeNumber <= 400000;
      const categoryEligible = category === 'OBC' || category === 'SC' || category === 'ST' || category === 'General';
      const docReady = hasMarksCert || item.requiredDocuments.some((doc) => doc.toLowerCase().includes('marks'));
      return courseMatch && incomeEligible && categoryEligible && docReady;
    });
  }

  function getWhyReasons(profile, documents) {
    const reasons = [];
    const courseMatches = String(profile.education.course || '').toLowerCase();
    if (courseMatches.includes('b.tech') || courseMatches.includes('b.sc') || courseMatches.includes('b.e')) {
      reasons.push({ text: '✓ Your course matches', status: 'done' });
    } else {
      reasons.push({ text: '⚠ Your course is still being checked', status: 'warning' });
    }

    if (getIncomeNumber(profile.eligibility.income) <= 400000) {
      reasons.push({ text: '✓ Your income is within the limit', status: 'done' });
    } else {
      reasons.push({ text: '⚠ Your income needs verification', status: 'warning' });
    }

    if ((profile.eligibility.residence || profile.basic.state || '').toLowerCase().includes('telangana') || (profile.eligibility.residence || profile.basic.state || '').toLowerCase().includes('andhra')) {
      reasons.push({ text: '✓ Your location is eligible', status: 'done' });
    } else {
      reasons.push({ text: '⚠ Your location needs review', status: 'warning' });
    }

    if (profile.education.level && profile.education.level.toLowerCase().includes('undergraduate')) {
      reasons.push({ text: '✓ Your education level matches', status: 'done' });
    } else {
      reasons.push({ text: '⚠ Your education level needs verification', status: 'warning' });
    }

    return reasons;
  }

  function getRecoveryPlan(profile, documents) {
    const results = getAlternativeOpportunities(profile, documents);
    const missingDoc = documents.find((doc) => doc.status === 'needs_attention' || doc.status === 'expired' || doc.status === 'expiring_soon');

    return [
      { label: 'Previous deadline identified', done: true },
      { label: 'Alternative opportunities found', done: results.length > 0 },
      { label: 'Check eligibility', done: false, action: 'Check Eligibility' },
      { label: 'Prepare documents', done: Boolean(missingDoc), action: 'Prepare Documents' },
      { label: 'Apply before deadline', done: false, action: 'Apply Now' }
    ];
  }

  function getMissedInsight(profile, documents) {
    const reasons = [];
    const missingDoc = documents.find((doc) => doc.status === 'needs_attention' || doc.status === 'expired' || doc.status === 'expiring_soon');
    if (missingDoc) reasons.push(`Missing document: ${missingDoc.name}`);
    if (!profile.education.course || !profile.eligibility.category) reasons.push('Application incomplete');
    if (getIncomeNumber(profile.eligibility.income) > 400000) reasons.push('Eligibility issue');
    if (!reasons.length) reasons.push('Deadline passed');
    return reasons;
  }

  function getRenewalDeadline() {
    const days = 24;
    return new Date(Date.now() + days * 24 * 60 * 60 * 1000);
  }

  function getRenewalDeadlineText(deadline) {
    const diffMs = deadline.getTime() - Date.now();
    const diffDays = Math.ceil(diffMs / (1000 * 60 * 60 * 24));
    const diffHours = Math.ceil(diffMs / (1000 * 60 * 60));

    if (diffMs <= 0) return 'Deadline Passed';
    if (diffHours <= 48) return 'Renewal Rescue Mode';
    if (diffDays <= 7) return `${diffDays} days remaining`;
    if (diffDays <= 30) return `${diffDays} days remaining`;
    return `${diffDays} days remaining`;
  }

  function getRenewalReadiness(profile, documents) {
    const checks = [
      Boolean(profile.basic.name),
      Boolean(profile.education.course),
      Boolean(profile.education.institution),
      Boolean(profile.eligibility.income),
      documents.some((doc) => doc.name.toLowerCase().includes('marks')),
      documents.some((doc) => doc.name.toLowerCase().includes('income'))
    ];
    const completeCount = checks.filter(Boolean).length;
    const score = Math.min(100, 55 + completeCount * 7 + (documents.some((doc) => doc.status === 'verified') ? 10 : 0));
    return score;
  }

  function getRenewalRequirementList(documents) {
    return [
      { label: 'Academic Progress', status: 'done', action: 'Complete', note: '✓ Complete' },
      { label: 'Attendance Requirement', status: 'done', action: 'Satisfied', note: '✓ Satisfied' },
      { label: 'Income Certificate', status: documents.some((doc) => doc.name.toLowerCase().includes('income') && doc.status !== 'expired') ? 'warning' : 'done', action: documents.some((doc) => doc.name.toLowerCase().includes('income') && doc.status !== 'expired') ? 'Update Document' : 'Verified', note: documents.some((doc) => doc.name.toLowerCase().includes('income') && doc.status !== 'expired') ? '⚠ Needs Update' : '✓ Available' },
      { label: 'Marks Memo', status: 'done', action: 'View TrustVault', note: '✓ Available in TrustVault' },
      { label: 'Renewal Form', status: 'pending', action: 'Start Renewal', note: '○ Not Started' }
    ];
  }

  function renderRecoveryResults(filter = 'all') {
    const container = document.getElementById('recoveryResults');
    if (!container) return;
    const profile = loadProfileForRecovery();
    const documents = loadDocumentsForRecovery();
    const items = getAlternativeOpportunities(profile, documents).filter((item) => {
      if (filter === 'all') return true;
      if (filter === 'strong') return item.match >= 85;
      if (filter === 'deadline') return item.deadline && new Date(item.deadline).getTime() < Date.now() + 10 * 24 * 60 * 60 * 1000;
      if (filter === 'docs') return item.requiredDocuments.some((doc) => doc.toLowerCase().includes('income') || doc.toLowerCase().includes('marks'));
      if (filter === 'verify') return item.requirementTags.includes('Needs verification');
      return true;
    });

    if (!items.length) {
      container.innerHTML = `
        <div class="empty-state">
          <h3>No alternative opportunities found yet.</h3>
          <p>Try updating your profile or check again later.</p>
          <div class="empty-actions">
            <button type="button" class="btn btn-secondary" data-empty-action="profile">Update Profile</button>
            <button type="button" class="btn btn-primary" data-empty-action="explore">Explore Opportunities</button>
          </div>
        </div>
      `;
      container.querySelectorAll('[data-empty-action]').forEach((button) => {
        button.addEventListener('click', () => {
          if (button.dataset.emptyAction === 'profile') window.location.href = 'profile.html';
          else window.location.href = 'opportunities.html';
        });
      });
      return;
    }

    container.innerHTML = items.map((item) => `
      <article class="recovery-card" data-item-id="${item.id}">
        <div class="scholarship-identity-row">
          <div>
            <h3>${item.name}</h3>
            <small>${item.provider}</small>
          </div>
          <span class="amount-pill">₹${Number(item.amount).toLocaleString()} / year</span>
        </div>
        <div class="match-row">
          <span>Match: <strong>${item.match}%</strong></span>
          <span>Deadline: ${new Date(item.deadline).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
        </div>
        <div class="eligibility-tags">
          ${item.requirementTags.map((tag) => `<span>${tag === 'Needs verification' ? '⚠' : '✓'} ${tag}</span>`).join('')}
        </div>
        <div class="requirements-box">
          <strong>Required documents</strong>
          <p>${item.requiredDocuments.join(', ')}</p>
        </div>
        <div class="card-actions-row">
          <button type="button" class="btn btn-primary small-btn" data-check-eligibility="${item.id}">Check Eligibility</button>
        </div>
      </article>
    `).join('');

    container.querySelectorAll('[data-check-eligibility]').forEach((button) => {
      button.addEventListener('click', () => {
        const opportunity = items.find((item) => item.id === button.dataset.checkEligibility);
        const suggestionBox = document.getElementById('whySuggestionList');
        if (suggestionBox && opportunity) {
          suggestionBox.innerHTML = getWhyReasons(profile, documents).map((reason) => `
            <div class="reason-row ${reason.status === 'warning' ? 'warning' : 'done'}">
              <span>${reason.text}</span>
            </div>
          `).join('');
        }
        const ai = document.getElementById('aiResponse');
        if (ai) ai.textContent = `${opportunity.name} is a strong match for you because your course, income, and location align with the scholarship profile.`;
      });
    });
  }

  function renderRecoveryPlan() {
    const container = document.getElementById('recoveryPlan');
    if (!container) return;
    const profile = loadProfileForRecovery();
    const docs = loadDocumentsForRecovery();
    const plan = getRecoveryPlan(profile, docs);

    container.innerHTML = plan.map((step, index) => `
      <div class="plan-row ${step.done ? 'done' : ''}">
        <span class="plan-index">${step.done ? '✓' : '○'}</span>
        <div class="plan-copy">
          <strong>${index + 1}. ${step.label}</strong>
        </div>
        <button type="button" class="plan-action ${step.done ? 'done-button' : ''}" data-plan-action="${step.label}">${step.done ? 'Open' : 'Action'}</button>
      </div>
    `).join('');

    container.querySelectorAll('[data-plan-action]').forEach((button) => {
      button.addEventListener('click', () => {
        const action = button.dataset.planAction;
        if (action === 'Check eligibility') window.location.href = 'eligibility.html';
        if (action === 'Prepare documents') window.location.href = 'documents.html';
        if (action === 'Apply Now') window.location.href = 'applications.html';
        else if (button.parentElement?.classList.contains('done')) {
          document.getElementById('recoveryResults')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  }

  function renderWhySuggestion() {
    const container = document.getElementById('whySuggestionList');
    if (!container) return;
    const reasons = getWhyReasons(loadProfileForRecovery(), loadDocumentsForRecovery());
    container.innerHTML = reasons.map((item) => `
      <div class="reason-row ${item.status === 'warning' ? 'warning' : 'done'}">
        <span>${item.text}</span>
      </div>
    `).join('');
  }

  function renderMissedInsight() {
    const container = document.getElementById('missedInsight');
    if (!container) return;
    const reasons = getMissedInsight(loadProfileForRecovery(), loadDocumentsForRecovery());
    container.innerHTML = reasons.map((reason) => `
      <div class="insight-item">
        <strong>${reason}</strong>
        <p>ADIVYA is using a neutral review of your current application state to guide your next step.</p>
      </div>
    `).join('');
  }

  function renderRenewalAfter() {
    const profile = loadProfileForRecovery();
    const documents = loadDocumentsForRecovery();
    const deadline = getRenewalDeadline();
    const readiness = getRenewalReadiness(profile, documents);

    const scholarshipName = document.getElementById('renewalScholarshipName');
    const renewalYear = document.getElementById('renewalYear');
    const renewalReadinessValue = document.getElementById('renewalReadinessValue');
    const renewalRequirementSummary = document.getElementById('renewalRequirementSummary');
    const renewalProgressBar = document.getElementById('renewalProgressBar');
    const renewalDeadlineText = document.getElementById('renewalDeadlineText');
    const renewalReminders = document.getElementById('renewalReminders');
    const trustVaultStatus = document.getElementById('trustVaultStatus');
    const renewalRequirements = document.getElementById('renewalRequirements');
    const renewalTimeline = document.getElementById('renewalTimeline');
    const renewalHistory = document.getElementById('renewalHistory');
    const missedScholarshipName = document.getElementById('missedScholarshipName');
    const missedDeadlineText = document.getElementById('missedDeadlineText');

    if (scholarshipName) scholarshipName.textContent = 'National Merit Scholarship';
    if (renewalYear) renewalYear.textContent = '2026–27';
    if (renewalReadinessValue) renewalReadinessValue.textContent = `${readiness}%`;
    if (renewalProgressBar) renewalProgressBar.style.width = `${readiness}%`;
    if (renewalRequirementSummary) renewalRequirementSummary.innerHTML = readiness >= 80 ? '✓ 4 requirements complete<br />⚠ 1 requirement needs attention' : '⚠ 3 requirements complete<br />⚠ 2 requirements need attention';
    if (renewalDeadlineText) renewalDeadlineText.textContent = getRenewalDeadlineText(deadline);
    if (missedScholarshipName) missedScholarshipName.textContent = 'Engineering Excellence Grant';
    if (missedDeadlineText) missedDeadlineText.textContent = new Date('2026-09-20').toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });

    if (renewalRequirements) {
      const items = getRenewalRequirementList(documents);
      renewalRequirements.innerHTML = items.map((item) => `
        <div class="requirement-row ${item.status === 'warning' ? 'warning' : item.status === 'pending' ? 'pending' : 'done'}">
          <div class="requirement-copy">
            <strong>${item.label}</strong>
            <small>${item.note}</small>
          </div>
          <button type="button" class="btn btn-secondary small-btn" data-requirement-action="${item.label}">${item.action}</button>
        </div>
      `).join('');

      renewalRequirements.querySelectorAll('[data-requirement-action]').forEach((button) => {
        button.addEventListener('click', () => {
          const action = button.dataset.requirementAction;
          if (action === 'Update Document' || action === 'View TrustVault') window.location.href = 'documents.html';
          if (action === 'Start Renewal') {
            const formCard = document.getElementById('renewalFormCard');
            formCard?.classList.remove('hidden');
            formCard?.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        });
      });
    }

    if (renewalTimeline) {
      const steps = [
        { label: 'Scholarship Awarded', done: true },
        { label: 'Current Academic Year', done: true },
        { label: 'Renewal Documents', done: true },
        { label: 'Renewal Application', done: false },
        { label: 'Renewal Deadline', done: false },
        { label: 'Renewed', done: false }
      ];
      renewalTimeline.innerHTML = steps.map((step) => `
        <div class="timeline-block ${step.done ? 'done' : ''}">
          <span>${step.done ? '✓' : '○'}</span>
          <strong>${step.label}</strong>
        </div>
      `).join('');
    }

    if (renewalReminders) {
      const days = Math.max(1, Math.ceil((deadline.getTime() - Date.now()) / (1000 * 60 * 60 * 24)));
      const reminders = [
        days > 30 ? '30 days before: Renewal preparation can begin.' : 'Renewal preparation can begin now.',
        days > 14 ? '14 days before: Your renewal documents are almost ready.' : 'Your renewal documents are almost ready.',
        days > 7 ? '7 days before: Renewal deadline is approaching.' : 'Renewal deadline is approaching.',
        days <= 2 ? '48 hours before: Urgent: Complete your renewal.' : 'Your renewal reminder is active.'
      ];
      renewalReminders.innerHTML = reminders.map((item) => `<div class="reminder-item">${item}</div>`).join('');
    }

    if (trustVaultStatus) {
      const marksDoc = documents.find((doc) => doc.name.toLowerCase().includes('marks'));
      const incomeDoc = documents.find((doc) => doc.name.toLowerCase().includes('income'));
      trustVaultStatus.innerHTML = `
        <div class="trustvault-item">
          <strong>${marksDoc ? 'Your verified Marks Memo is already available.' : 'Your Marks Memo is missing.'}</strong>
          <button type="button" class="btn btn-secondary small-btn" data-trust-action="reuse">${marksDoc ? 'Reuse Document' : 'Upload Marks Memo'}</button>
        </div>
        <div class="trustvault-item">
          <strong>${incomeDoc && incomeDoc.status === 'expired' ? 'Income Certificate has expired.' : 'Income Certificate is being reviewed.'}</strong>
          <button type="button" class="btn btn-secondary small-btn" data-trust-action="replace">${incomeDoc && incomeDoc.status === 'expired' ? 'Replace Document' : 'Update Document'}</button>
        </div>
      `;
      trustVaultStatus.querySelectorAll('[data-trust-action]').forEach((button) => {
        button.addEventListener('click', () => {
          if (button.dataset.trustAction === 'reuse') {
            const ai = document.getElementById('aiResponse');
            if (ai) ai.textContent = 'Your verified Marks Memo is available in TrustVault and can be reused for the renewal workflow.';
          } else {
            window.location.href = 'documents.html';
          }
        });
      });
    }

    if (renewalHistory) {
      renewalHistory.innerHTML = [
        '<div class="history-item"><strong>2024–25</strong><span>✓ Awarded</span></div>',
        '<div class="history-item"><strong>2025–26</strong><span>✓ Renewed</span></div>',
        '<div class="history-item"><strong>2026–27</strong><span>✓ Awarded</span></div>',
        '<div class="history-item"><strong>2027–28</strong><span>○ Renewal Pending</span></div>'
      ].join('');
    }

    const tree = document.getElementById('growingTree');
    if (tree) {
      tree.innerHTML = `
        <div class="tree-stage">
          <span>🌱 Seed / Roots</span>
          <small>Profile + Eligibility</small>
        </div>
        <div class="tree-stage">
          <span>🌿 Sapling</span>
          <small>Application Submitted</small>
        </div>
        <div class="tree-stage active">
          <span>🌳 Growing Tree</span>
          <small>Scholarship Awarded</small>
        </div>
        <div class="tree-stage strong">
          <span>🌳✨ Stronger Tree</span>
          <small>Scholarship Renewed</small>
        </div>
        <div class="tree-branch">New Path</div>
      `;
    }
  }

  function setupRecoveryEvents() {
    document.querySelectorAll('.filter-chip').forEach((chip) => {
      chip.addEventListener('click', () => {
        document.querySelectorAll('.filter-chip').forEach((button) => button.classList.toggle('active', button === chip));
        renderRecoveryResults(chip.dataset.filter || 'all');
      });
    });

    document.getElementById('findAlternativesButton')?.addEventListener('click', () => {
      document.getElementById('recoveryResults')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      renderRecoveryResults('all');
    });

    document.getElementById('renewalRescueButton')?.addEventListener('click', () => {
      window.location.href = 'rescue.html';
    });

    document.getElementById('submitRenewalButton')?.addEventListener('click', () => {
      const form = document.getElementById('renewalForm');
      const formData = new FormData(form);
      const payload = {
        name: formData.get('name'),
        course: formData.get('course'),
        institution: formData.get('institution'),
        scholarship: formData.get('scholarship'),
        previousAward: formData.get('previousAward'),
        documents: formData.get('documents'),
        savedAt: new Date().toISOString()
      };
      localStorage.setItem(RENEWAL_STATE_KEY, JSON.stringify(payload));
      const ai = document.getElementById('aiResponse');
      if (ai) ai.textContent = 'Your renewal has been prepared and saved. ADIVYA has not submitted anything yet — review is still required.';
      document.getElementById('renewalFormCard')?.classList.add('hidden');
    });

    document.getElementById('closeRenewalForm')?.addEventListener('click', () => {
      document.getElementById('renewalFormCard')?.classList.add('hidden');
    });

    document.getElementById('profileEditButton')?.addEventListener('click', () => {
      window.location.href = 'profile.html';
    });

    document.getElementById('logoutButton')?.addEventListener('click', () => {
      localStorage.removeItem(PROFILE_STORAGE_KEY);
      window.location.href = 'login.html';
    });

    document.getElementById('notificationBadge')?.addEventListener('click', () => {
      document.getElementById('notificationPanel')?.classList.toggle('hidden');
    });

    document.querySelector('.notification-toggle')?.addEventListener('click', () => {
      document.getElementById('notificationPanel')?.classList.toggle('hidden');
    });

    document.getElementById('closeNotificationPanel')?.addEventListener('click', () => {
      document.getElementById('notificationPanel')?.classList.add('hidden');
    });

    document.getElementById('aiAssistantToggle')?.addEventListener('click', () => {
      document.getElementById('aiPanel')?.classList.toggle('hidden');
    });

    document.getElementById('closeAiPanel')?.addEventListener('click', () => {
      document.getElementById('aiPanel')?.classList.add('hidden');
    });

    const notificationList = document.getElementById('notificationList');
    if (notificationList) {
      const messages = [
        'Your scholarship deadline has passed.',
        'ADIVYA found 4 alternative opportunities.',
        'A new scholarship matching your profile is available.'
      ];
      notificationList.innerHTML = messages.map((message) => `
        <div class="notification-item"><button type="button" class="notification-link">🔔 <span>${message}</span></button></div>
      `).join('');
      notificationList.querySelectorAll('.notification-link').forEach((button) => {
        button.addEventListener('click', () => {
          document.getElementById('recoveryResults')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
      });
    }

    const badge = document.getElementById('notificationBadge');
    if (badge) badge.textContent = '3';

    const langSelect = document.getElementById('recoveryLanguage');
    if (langSelect) {
      const savedLang = localStorage.getItem(LANGUAGE_KEY) || 'en';
      langSelect.value = savedLang;
      langSelect.addEventListener('change', (event) => localStorage.setItem(LANGUAGE_KEY, event.target.value));
    }

    document.querySelectorAll('.nav-item').forEach((button) => {
      button.addEventListener('click', () => {
        const target = button.dataset.nav;
        if (target === 'home') window.location.href = 'index.html';
        if (target === 'dashboard') window.location.href = 'dashboard.html';
        if (target === 'opportunities') window.location.href = 'opportunities.html';
        if (target === 'applications') window.location.href = 'applications.html';
        if (target === 'documents') window.location.href = 'documents.html';
        if (target === 'journey') window.location.href = 'journey.html';
        if (target === 'recovery') window.location.href = 'recovery.html';
      });
    });

    const savedRenewal = JSON.parse(localStorage.getItem(RENEWAL_STATE_KEY) || '{}');
    const renewalForm = document.getElementById('renewalForm');
    if (renewalForm && savedRenewal.name) {
      document.getElementById('renewalName').value = savedRenewal.name;
      document.getElementById('renewalCourse').value = savedRenewal.course || loadProfileForRecovery().education.course;
      document.getElementById('renewalInstitution').value = savedRenewal.institution || loadProfileForRecovery().education.institution;
      document.getElementById('renewalScholarship').value = savedRenewal.scholarship || 'National Merit Scholarship';
      document.getElementById('renewalAwardDetails').value = savedRenewal.previousAward || 'Previous award details';
      document.getElementById('renewalDocuments').value = savedRenewal.documents || 'Marks Memo, Income Certificate';
    }

    document.querySelectorAll('.ai-question').forEach((button) => {
      button.addEventListener('click', () => {
        const profile = loadProfileForRecovery();
        const docs = loadDocumentsForRecovery();
        const question = button.dataset.question || 'What can I apply for after missing this scholarship?';
        const response = document.getElementById('aiResponse');
        if (!response) return;
        const answerMap = {
          'What can I apply for after missing this scholarship?': 'ADIVYA suggests looking at scholarships that match your course, income band, and location. The strongest match for your profile is the Telangana STEM Recovery Grant.',
          'Which alternative matches me?': 'The strongest match for your current profile is Telangana STEM Recovery Grant at 92% compatibility.',
          'When is my renewal deadline?': `Your renewal deadline is ${getRenewalDeadlineText(getRenewalDeadline())}.`,
          'What documents do I need for renewal?': 'Your renewal usually requires a recent income certificate, your marks memo, and your updated academic details.',
          'Can I reuse my previous documents?': docs.some((doc) => doc.name.toLowerCase().includes('marks')) ? 'Yes. ADIVYA can reuse your verified Marks Memo from TrustVault.' : 'You may need to upload a new document if your previous one is not available in TrustVault.'
        };
        response.textContent = answerMap[question] || 'ADIVYA is checking the most relevant next action for your profile and scholarship state.';
      });
    });
  }

  renderRecoveryResults('all');
  renderWhySuggestion();
  renderRecoveryPlan();
  renderMissedInsight();
  renderRenewalAfter();
  setupRecoveryEvents();
}

(function () {
  const ACCESSIBILITY_STORAGE_KEY = 'adivya_accessibility_state';
  const DEFAULT_ACCESSIBILITY_STATE = {
    language: 'en',
    voiceEnabled: false,
    readAloudEnabled: false,
    textSize: 'normal',
    displayMode: 'standard',
    lowBandwidth: false,
    simpleLanguage: false,
    connectionStatus: navigator.onLine ? 'online' : 'offline',
    offlinePreparation: true,
    lastVoiceResponse: ''
  };

  function loadAccessibilityState() {
    try {
      const raw = JSON.parse(localStorage.getItem(ACCESSIBILITY_STORAGE_KEY) || '{}');
      return { ...DEFAULT_ACCESSIBILITY_STATE, ...raw };
    } catch (error) {
      return { ...DEFAULT_ACCESSIBILITY_STATE };
    }
  }

  function saveAccessibilityState(nextState) {
    const state = { ...loadAccessibilityState(), ...nextState };
    localStorage.setItem(ACCESSIBILITY_STORAGE_KEY, JSON.stringify(state));
    applyAccessibilityState(state);
    return state;
  }

  function getVoiceLanguage(lang) {
    const map = { en: 'en-US', te: 'te-IN', hi: 'hi-IN' };
    return map[lang] || 'en-US';
  }

  function setConnectionStatus(stateOverride) {
    const state = loadAccessibilityState();
    const nextState = {
      ...state,
      connectionStatus: stateOverride || (navigator.onLine ? 'online' : 'offline')
    };
    saveAccessibilityState(nextState);
  }

  function applyAccessibilityState(state = loadAccessibilityState()) {
    const body = document.body;
    body.classList.toggle('large-text', state.textSize === 'large');
    body.classList.toggle('reduced-motion', state.displayMode === 'reduced-motion' || state.lowBandwidth);
    body.classList.toggle('high-readability', state.displayMode === 'high-readability');
    body.classList.toggle('low-bandwidth', Boolean(state.lowBandwidth));
    document.documentElement.lang = state.language || 'en';

    document.querySelectorAll('#accessibilityLanguage, #dashboardLanguage, #journeyLanguage, #documentsLanguage, #opportunityLanguage, #eligibilityLanguage, #recoveryLanguage, #rescueLanguage').forEach((select) => {
      if (select && state.language) {
        select.value = state.language;
      }
    });

    document.querySelectorAll('[data-language-option]').forEach((button) => {
      const isActive = button.dataset.languageOption === state.language;
      button.classList.toggle('active', isActive);
      button.setAttribute('aria-pressed', String(isActive));
    });

    document.querySelectorAll('[data-text-size]').forEach((button) => {
      const isActive = button.dataset.textSize === state.textSize;
      button.classList.toggle('active', isActive);
    });

    document.querySelectorAll('[data-display-mode]').forEach((button) => {
      const isActive = button.dataset.displayMode === state.displayMode;
      button.classList.toggle('active', isActive);
    });

    document.querySelectorAll('[data-access-toggle]').forEach((button) => {
      const toggleName = button.dataset.accessToggle;
      const value = state[toggleName] ?? false;
      button.classList.toggle('active', value);
      button.setAttribute('aria-pressed', String(value));
      button.textContent = value ? 'ON' : 'OFF';
    });

    const connectionIndicator = document.getElementById('connection-status-indicator');
    if (connectionIndicator) {
      const status = state.connectionStatus === 'limited' ? 'Limited connectivity' : state.connectionStatus === 'offline' ? 'Offline' : 'Connected';
      const shortStatus = state.connectionStatus === 'offline' ? '● Offline' : state.connectionStatus === 'limited' ? '● Limited connectivity' : '● Connected';
      connectionIndicator.innerHTML = `<span class="status-dot"></span><span>${shortStatus}</span>`;
      connectionIndicator.setAttribute('title', status);
    }

    const statusPill = document.querySelector('.status-pill');
    if (statusPill) {
      const status = state.connectionStatus === 'offline' ? 'Offline' : state.connectionStatus === 'limited' ? 'Limited connectivity' : 'Connected';
      statusPill.innerHTML = `<span class="status-dot"></span> ${status}`;
    }

    const accessibilityLanguageStatus = document.getElementById('accessibilityLanguageStatus');
    if (accessibilityLanguageStatus) {
      const labels = { en: 'English', te: 'తెలుగు', hi: 'हिन्दी' };
      accessibilityLanguageStatus.textContent = labels[state.language] || 'English';
    }

    const accessibilitySummary = document.getElementById('accessibilitySummary');
    if (accessibilitySummary) {
      const summaryParts = [];
      if (state.voiceEnabled) summaryParts.push('Voice on');
      if (state.lowBandwidth) summaryParts.push('Low bandwidth on');
      if (state.readAloudEnabled) summaryParts.push('Read aloud on');
      accessibilitySummary.textContent = summaryParts.length ? summaryParts.join(' • ') : 'Custom settings ready';
    }

    const voiceStateLabel = document.getElementById('voiceStateLabel');
    if (voiceStateLabel) {
      if (!state.voiceEnabled) {
        voiceStateLabel.textContent = 'Tap to speak';
      } else {
        voiceStateLabel.textContent = 'Listening...';
      }
    }

    const voiceLanguageLabel = document.getElementById('voiceLanguageLabel');
    if (voiceLanguageLabel) {
      const labels = { en: 'English voice', te: 'తెలుగులో వాయిస్', hi: 'हिन्दी वॉयस' };
      voiceLanguageLabel.textContent = labels[state.language] || 'English voice';
    }

    const dashboardAccessibilityCard = document.getElementById('dashboardAccessibilityCard');
    if (dashboardAccessibilityCard) {
      const labels = { en: 'English', te: 'తెలుగు', hi: 'हिन्दी' };
      const cardText = dashboardAccessibilityCard.querySelector('.card-text');
      const chips = [
        `${state.language ? labels[state.language] : 'English'}`,
        `${state.voiceEnabled ? '🎙 Voice ON' : '🎙 Voice OFF'}`,
        `${state.lowBandwidth ? '📶 Low Bandwidth ON' : '📶 Low Bandwidth OFF'}`
      ];
      if (cardText) {
        cardText.innerHTML = chips.map((chip) => `<span>${chip}</span>`).join('');
      }
    }

    if (document.getElementById('voiceMicButton')) {
      const voiceMicButton = document.getElementById('voiceMicButton');
      voiceMicButton.setAttribute('aria-label', state.voiceEnabled ? 'Voice assistance active' : 'Tap to speak');
      voiceMicButton.style.opacity = state.voiceEnabled ? '1' : '0.8';
    }

    if (document.getElementById('offlineNotice')) {
      const offlineNotice = document.getElementById('offlineNotice');
      offlineNotice.textContent = state.connectionStatus === 'offline'
        ? "You're offline. You can still access your saved preparation information."
        : state.connectionStatus === 'limited'
          ? 'Your connection is limited. ADIVYA will keep your saved guidance available.'
          : 'You are connected to the internet.';
    }
  }

  function speakText(text) {
    const state = loadAccessibilityState();
    if (!state.readAloudEnabled || !('speechSynthesis' in window)) {
      return;
    }
    if (window.speechSynthesis.speaking || window.speechSynthesis.pending) {
      window.speechSynthesis.cancel();
    }
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = getVoiceLanguage(state.language);
    utterance.rate = 1;
    utterance.pitch = 1;
    window.speechSynthesis.speak(utterance);
  }

  function startVoiceCapture() {
    const state = loadAccessibilityState();
    if (!state.voiceEnabled) {
      const label = document.getElementById('voiceStateLabel');
      if (label) label.textContent = 'Voice assistance is currently unavailable.';
      return;
    }

    const SpeechRecognitionCtor = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognitionCtor) {
      const label = document.getElementById('voiceStateLabel');
      if (label) label.textContent = 'Voice assistance is currently unavailable.';
      return;
    }

    const recognition = new SpeechRecognitionCtor();
    recognition.lang = getVoiceLanguage(state.language);
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    const label = document.getElementById('voiceStateLabel');
    if (label) label.textContent = 'Listening...';

    recognition.onstart = () => {
      if (label) label.textContent = 'Listening...';
    };

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      const aiResponse = document.getElementById('aiResponse');
      if (label) label.textContent = 'Understanding...';
      if (aiResponse) {
        aiResponse.textContent = `Here’s what I found: ${transcript}`;
      }
      const responseText = state.language === 'te'
        ? 'మీకు మీకు సంబంధించిన తదుపరి చర్యలు ముందుకు సాగుతున్నాయి.'
        : state.language === 'hi'
          ? 'आपके लिए अगला सही कदम आगे बढ़ रहा है।'
          : 'Your next scholarship steps are moving forward.';
      if (label) label.textContent = 'Here’s what I found...';
      const stateAfter = loadAccessibilityState();
      saveAccessibilityState({ ...stateAfter, lastVoiceResponse: responseText });
      if (aiResponse) aiResponse.textContent = responseText;
    };

    recognition.onerror = () => {
      if (label) label.textContent = 'Voice assistance is currently unavailable.';
    };

    recognition.onend = () => {
      const voiceMicButton = document.getElementById('voiceMicButton');
      if (voiceMicButton) voiceMicButton.classList.remove('listening');
    };

    recognition.start();
    const voiceMicButton = document.getElementById('voiceMicButton');
    if (voiceMicButton) voiceMicButton.classList.add('listening');
  }

  function ensureQuickAccessibilityPanel() {
    if (document.querySelector('.quick-accessibility-panel')) {
      return;
    }

    const panelWrap = document.createElement('div');
    panelWrap.className = 'quick-accessibility-panel';
    panelWrap.innerHTML = `
      <button type="button" class="accessibility-quick-button" aria-label="Open accessibility tools">♿</button>
      <div class="accessibility-quick-panel" id="accessibilityQuickPanel">
        <button type="button" data-quick-access="language">🌐 Language</button>
        <button type="button" data-quick-access="voice">🎙 Voice</button>
        <button type="button" data-quick-access="read-aloud">🔊 Read Aloud</button>
        <button type="button" data-quick-access="text-size">🔤 Text Size</button>
        <button type="button" data-quick-access="low-bandwidth">📶 Low Bandwidth</button>
        <button type="button" data-quick-access="center">♿ Accessibility Center</button>
      </div>
    `;

    document.body.appendChild(panelWrap);

    const openButton = panelWrap.querySelector('.accessibility-quick-button');
    const quickPanel = document.getElementById('accessibilityQuickPanel');
    openButton.addEventListener('click', () => {
      quickPanel.classList.toggle('visible');
    });

    quickPanel.addEventListener('click', (event) => {
      const action = event.target.dataset.quickAccess;
      if (!action) return;
      const state = loadAccessibilityState();
      if (action === 'center') {
        window.location.href = 'accessibility.html';
        return;
      }
      if (action === 'voice') {
        saveAccessibilityState({ voiceEnabled: !state.voiceEnabled });
      }
      if (action === 'read-aloud') {
        saveAccessibilityState({ readAloudEnabled: !state.readAloudEnabled });
      }
      if (action === 'low-bandwidth') {
        saveAccessibilityState({ lowBandwidth: !state.lowBandwidth });
      }
      if (action === 'language') {
        const nextLanguage = state.language === 'en' ? 'te' : state.language === 'te' ? 'hi' : 'en';
        saveAccessibilityState({ language: nextLanguage });
      }
      if (action === 'text-size') {
        const nextSize = state.textSize === 'small' ? 'normal' : state.textSize === 'normal' ? 'large' : 'small';
        saveAccessibilityState({ textSize: nextSize });
      }
      quickPanel.classList.remove('visible');
    });
  }

  function ensureSettingsButton() {
    const dashboardTools = document.querySelector('.dashboard-tools');
    if (!dashboardTools || document.getElementById('settingsAccessibilityBtn')) {
      return;
    }

    const settingsButton = document.createElement('button');
    settingsButton.type = 'button';
    settingsButton.className = 'profile-pill';
    settingsButton.id = 'settingsAccessibilityBtn';
    settingsButton.textContent = '⚙ Settings';
    settingsButton.setAttribute('aria-label', 'Open Accessibility Center');
    settingsButton.addEventListener('click', () => window.location.href = 'accessibility.html');
    dashboardTools.appendChild(settingsButton);
  }

  function ensureDashboardAccessibilityCard() {
    if (!document.body.classList.contains('dashboard-page')) return;
    const main = document.querySelector('.dashboard-main');
    if (!main || document.getElementById('dashboardAccessibilityCard')) return;

    const card = document.createElement('article');
    card.id = 'dashboardAccessibilityCard';
    card.className = 'card accessibility-card';
    card.innerHTML = `
      <div class="card-head">
        <span class="card-kicker">ACCESSIBILITY</span>
      </div>
      <div class="card-text"></div>
      <button type="button" class="btn btn-secondary" id="manageAccessibilityBtn">Manage Accessibility →</button>
    `;
    const quickActions = document.querySelector('.quick-actions');
    if (quickActions) {
      main.insertBefore(card, quickActions);
    } else {
      main.appendChild(card);
    }

    const manageButton = document.getElementById('manageAccessibilityBtn');
    if (manageButton) {
      manageButton.addEventListener('click', () => window.location.href = 'accessibility.html');
    }
  }

  function bindAccessibilityPageInteractions() {
    const state = loadAccessibilityState();

    document.querySelectorAll('[data-language-option]').forEach((button) => {
      button.addEventListener('click', () => {
        saveAccessibilityState({ language: button.dataset.languageOption || 'en' });
      });
    });

    document.querySelectorAll('[data-text-size]').forEach((button) => {
      button.addEventListener('click', () => {
        saveAccessibilityState({ textSize: button.dataset.textSize || 'normal' });
      });
    });

    document.querySelectorAll('[data-display-mode]').forEach((button) => {
      button.addEventListener('click', () => {
        saveAccessibilityState({ displayMode: button.dataset.displayMode || 'standard' });
      });
    });

    document.querySelectorAll('[data-access-toggle]').forEach((button) => {
      button.addEventListener('click', () => {
        const key = button.dataset.accessToggle;
        const current = loadAccessibilityState();
        const value = !(current[key] ?? false);
        const update = { [key]: value };
        if (key === 'lowBandwidth' && value) {
          update.displayMode = 'reduced-motion';
        }
        if (key === 'readAloudEnabled') {
          if (value) speakText('ADIVYA is ready to read your guidance aloud.');
        }
        saveAccessibilityState(update);
      });
    });

    document.querySelectorAll('[data-read-target]').forEach((button) => {
      button.addEventListener('click', () => {
        const text = button.dataset.readTarget || 'ADIVYA guidance';
        speakText(text);
      });
    });

    const accessibilityLanguageSelect = document.getElementById('accessibilityLanguage');
    if (accessibilityLanguageSelect) {
      accessibilityLanguageSelect.addEventListener('change', (event) => {
        saveAccessibilityState({ language: event.target.value });
      });
    }

    const voiceMicButton = document.getElementById('voiceMicButton');
    if (voiceMicButton) {
      voiceMicButton.addEventListener('click', startVoiceCapture);
    }

    const offlineOpenButton = document.getElementById('offlineOpenButton');
    if (offlineOpenButton) {
      offlineOpenButton.addEventListener('click', () => {
        const offlineState = document.getElementById('offlinePreparationState');
        if (offlineState) {
          offlineState.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    }

    const connectionIndicator = document.getElementById('connection-status-indicator');
    if (connectionIndicator) {
      connectionIndicator.addEventListener('click', () => {
        const next = loadAccessibilityState().connectionStatus === 'offline' ? 'online' : 'offline';
        saveAccessibilityState({ connectionStatus: next });
      });
    }

    if (document.getElementById('accessibilitySummary')) {
      if (state.connectionStatus === 'offline') {
        const offlineText = 'You\'re offline. You can still access your saved preparation information.';
        document.getElementById('accessibilitySummary').textContent = offlineText;
      }
    }
  }

  function initializeGlobalAccessibility() {
    ensureQuickAccessibilityPanel();
    ensureSettingsButton();
    ensureDashboardAccessibilityCard();
    applyAccessibilityState(loadAccessibilityState());

    window.addEventListener('online', () => setConnectionStatus('online'));
    window.addEventListener('offline', () => setConnectionStatus('offline'));

    document.addEventListener('click', (event) => {
      const target = event.target.closest('[data-nav="settings"]');
      if (target) {
        window.location.href = 'accessibility.html';
      }
    });

    const navLanguageSelectors = document.querySelectorAll('#accessibilityLanguage, #dashboardLanguage, #journeyLanguage, #documentsLanguage, #opportunityLanguage, #eligibilityLanguage, #recoveryLanguage, #rescueLanguage');
    navLanguageSelectors.forEach((select) => {
      if (!select) return;
      select.addEventListener('change', (event) => {
        saveAccessibilityState({ language: event.target.value });
      });
    });

    bindAccessibilityPageInteractions();
  }

  initializeGlobalAccessibility();
})();
