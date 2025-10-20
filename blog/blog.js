document.addEventListener('DOMContentLoaded', () => {
    fetch('blogposts.json')
      .then(response => response.json())
      .then(posts => {
        const container = document.getElementById('blog-container');
  
        posts.forEach(post => {
          const card = document.createElement('div');
          card.className = 'blog-card';
  
          card.innerHTML = `
            <img src="${post.image}" alt="${post.title}">
            <div class="blog-content">
              <h3>${post.title}</h3>
              <p>${post.description}</p>
              <span class="date">${post.date}</span>
            </div>
          `;
  
          container.appendChild(card);
        });
      });
  });
  