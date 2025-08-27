
document.addEventListener('DOMContentLoaded', function() {
    console.log('Website loaded successfully!');
    
   
    initializePage();
});


function initializePage() {

    const currentPage = window.location.pathname.split('/').pop();
    
    if (currentPage === 'javascript-page.html') {
        initializeJavaScriptPage();
    }
    
    // Add smooth scrolling for all internal links
    addSmoothScrolling();
    
    // Add active navigation highlighting
    highlightActiveNav();
}

// Initialize JavaScript page functionality
function initializeJavaScriptPage() {
    // Initialize counter from localStorage
    const savedCount = localStorage.getItem('counter') || 0;
    document.getElementById('counter').textContent = savedCount;
    
    // Initialize array items
    const savedItems = JSON.parse(localStorage.getItem('arrayItems')) || [];
    updateItemList(savedItems);
    
    console.log('JavaScript page initialized');
}

// Calculator functionality
function calculate(operation) {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const resultDiv = document.getElementById('result');
    
    if (isNaN(num1) || isNaN(num2)) {
        resultDiv.className = 'alert alert-danger';
        resultDiv.textContent = 'Please enter valid numbers!';
        return;
    }
    
    let result;
    let operationSymbol;
    
    switch(operation) {
        case '+':
            result = num1 + num2;
            operationSymbol = '+';
            break;
        case '-':
            result = num1 - num2;
            operationSymbol = '-';
            break;
        case '*':
            result = num1 * num2;
            operationSymbol = '×';
            break;
        case '/':
            if (num2 === 0) {
                resultDiv.className = 'alert alert-danger';
                resultDiv.textContent = 'Cannot divide by zero!';
                return;
            }
            result = num1 / num2;
            operationSymbol = '÷';
            break;
        default:
            resultDiv.className = 'alert alert-danger';
            resultDiv.textContent = 'Invalid operation!';
            return;
    }
    
    resultDiv.className = 'alert alert-success';
    resultDiv.textContent = `${num1} ${operationSymbol} ${num2} = ${result}`;
}

// Color changer functionality
function changeColor() {
    const colorBox = document.getElementById('colorBox');
    const colors = [
        '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7',
        '#DDA0DD', '#98D8C8', '#F7DC6F', '#BB8FCE', '#85C1E9'
    ];
    
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    colorBox.style.backgroundColor = randomColor;
    
    // Add a subtle animation
    colorBox.style.transform = 'scale(1.05)';
    setTimeout(() => {
        colorBox.style.transform = 'scale(1)';
    }, 200);
}

// Counter functionality with localStorage
function increment() {
    const counterElement = document.getElementById('counter');
    let count = parseInt(counterElement.textContent);
    count++;
    counterElement.textContent = count;
    localStorage.setItem('counter', count);
}

function decrement() {
    const counterElement = document.getElementById('counter');
    let count = parseInt(counterElement.textContent);
    count--;
    counterElement.textContent = count;
    localStorage.setItem('counter', count);
}

function reset() {
    const counterElement = document.getElementById('counter');
    counterElement.textContent = 0;
    localStorage.setItem('counter', 0);
}

// Form validation functionality
function validateForm() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const resultDiv = document.getElementById('validationResult');
    
    let isValid = true;
    let message = '';
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        isValid = false;
        message += 'Invalid email format. ';
    }
    
    // Password validation
    if (password.length < 6) {
        isValid = false;
        message += 'Password must be at least 6 characters. ';
    }
    
    if (isValid) {
        resultDiv.className = 'alert alert-success';
        resultDiv.textContent = 'Form is valid!';
    } else {
        resultDiv.className = 'alert alert-danger';
        resultDiv.textContent = message;
    }
}

// Array operations functionality
let arrayItems = JSON.parse(localStorage.getItem('arrayItems')) || [];

function addItem() {
    const newItem = `Item ${arrayItems.length + 1}`;
    arrayItems.push(newItem);
    updateItemList(arrayItems);
    saveArrayItems();
}

function removeItem() {
    if (arrayItems.length > 0) {
        arrayItems.pop();
        updateItemList(arrayItems);
        saveArrayItems();
    }
}

function sortItems() {
    arrayItems.sort();
    updateItemList(arrayItems);
    saveArrayItems();
}

function clearItems() {
    arrayItems = [];
    updateItemList(arrayItems);
    saveArrayItems();
}

function updateItemList(items) {
    const itemListElement = document.getElementById('itemList');
    if (items.length === 0) {
        itemListElement.textContent = 'No items';
    } else {
        itemListElement.textContent = items.join(', ');
    }
}

function saveArrayItems() {
    localStorage.setItem('arrayItems', JSON.stringify(arrayItems));
}

// Utility functions
function addSmoothScrolling() {
    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

function highlightActiveNav() {
    // Highlight the current page in navigation
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
}

// Add some interactive effects
document.addEventListener('DOMContentLoaded', function() {
    // Add click effect to buttons
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
        });
    });
    
    // Add typing effect to headings (optional)
    const headings = document.querySelectorAll('h1, h2');
    headings.forEach(heading => {
        heading.style.opacity = '0';
        heading.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            heading.style.transition = 'all 0.8s ease';
            heading.style.opacity = '1';
            heading.style.transform = 'translateY(0)';
        }, 300);
    });
});

// Add keyboard shortcuts
document.addEventListener('keydown', function(e) {
    // Ctrl/Cmd + K to focus search (if there was a search box)
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        console.log('Search shortcut pressed!');
    }
    
    // Escape key to clear any active states
    if (e.key === 'Escape') {
        // Reset any active elements
        document.querySelectorAll('.active').forEach(element => {
            element.classList.remove('active');
        });
    }
});

// Add some fun Easter eggs
let clickCount = 0;
document.addEventListener('click', function() {
    clickCount++;
    if (clickCount === 10) {
        console.log('🎉 You clicked 10 times! You\'re getting the hang of this!');
    } else if (clickCount === 50) {
        console.log('🚀 50 clicks! You\'re a clicking champion!');
    }
});

// Add page visibility API for better user experience
document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        console.log('Page is now hidden');
    } else {
        console.log('Page is now visible');
    }
});

// Add error handling for better debugging
window.addEventListener('error', function(e) {
    console.error('JavaScript error occurred:', e.error);
});

// Add performance monitoring
window.addEventListener('load', function() {
    const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
    console.log(`Page loaded in ${loadTime}ms`);
});
