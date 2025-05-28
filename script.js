// Certificate Management
const certificates = {
    'ai-cert': {
        title: 'Fundamentals of AI - Dicoding',
        image: 'ai-fundamentals.jpg',
        hasImage: true
    },
    'devops-cert': {
        title: 'DevOps Fundamentals - Dicoding',
        image: 'devops-fundamentals.jpg',
        hasImage: true
    },
    'cyber-cert': {
        title: 'Cybersecurity - Digital Talent Scholarship',
        image: 'cybersecurity.jpg',
        hasImage: true
    }
};

// View certificate functionality
function viewCertificate(certId) {
    const cert = certificates[certId];
    const modal = document.getElementById('cert-modal');
    const modalBody = document.getElementById('cert-modal-body');
    
    if (cert.hasImage) {
        modalBody.innerHTML = `
            <h3 style="color: var(--primary); margin-bottom: 1.5rem;">${cert.title}</h3>
            <img src="${cert.image}" alt="${cert.title}" style="max-width: 100%; height: auto;">
        `;
    } else {
        modalBody.innerHTML = `
            <h3 style="color: var(--primary); margin-bottom: 1.5rem;">${cert.title}</h3>
            <div class="cert-modal-placeholder">
                <i class="fas fa-certificate"></i>
                <p>Certificate image not available</p>
            </div>
        `;
    }
    
    modal.style.display = 'block';
}

// Close modal
function closeCertModal() {
    document.getElementById('cert-modal').style.display = 'none';
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('cert-modal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}