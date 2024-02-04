// Constants
const usersPaid = [
  'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww',
  'https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVyc29ufGVufDB8fDB8fHww',
  'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGVyc29ufGVufDB8fDB8fHww',
  'https://images.unsplash.com/photo-1554151228-14d9def656e4?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGVyc29ufGVufDB8fDB8fHww',
  'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D',
  'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D',
  'https://plus.unsplash.com/premium_photo-1664536392896-cd1743f9c02c?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D',
  'https://images.unsplash.com/photo-1593104547489-5cfb3839a3b5?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D'
];

const userCards = [
  {
    img: 'https://plus.unsplash.com/premium_photo-1678197937465-bdbc4ed95815?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D',
    name: 'Lee Pearson',
    tag: '@pears'
  },
  {
    img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D',
    name: 'Curtis Thornton',
    tag: '@c.Thornton'
  },
  {
    img: 'https://images.unsplash.com/photo-1542206395-9feb3edaa68d?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D',
    name: 'Amy Moss',
    tag: '@a-moss'
  },
  {
    img: 'https://images.unsplash.com/photo-1573140247632-f8fd74997d5c?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D',
    name: 'Elva Burke',
    tag: '@e.burkee'
  },
  {
    img: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D',
    name: 'Russel Bradford',
    tag: '@russel-strikes'
  },
  {
    img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D',
    name: 'Rose Croft',
    tag: '@rosee-19'
  },
  {
    img: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D',
    name: 'Helen Thorn',
    tag: '@mrs-thorn'
  },
  {
    img: 'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D',
    name: 'Adam Rafferty',
    tag: '@adam-r'
  },
  {
    img: 'https://images.unsplash.com/photo-1554727242-741c14fa561c?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D',
    name: 'Gemma Sanders',
    tag: '@sanders-23'
  },
  {
    img: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D',
    name: 'Amed Hussane',
    tag: '@a.hussane'
  }
];

// Functions
const createImageElement = (src, alt) => {
  const img = document.createElement('img');
  img.src = src;
  img.alt = alt || '';
  return img;
};

const createButtonElement = (classes, svgPath) => {
  const button = document.createElement('button');
  button.className = classes;
  button.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler ${svgPath}" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" />${svgPath}</svg>`;
  return button;
};

const createUserCardElement = (user) => {
  const card = document.createElement('div');
  card.classList.add('relative', 'flex', 'flex-col', 'p-5', 'rounded-lg', 'border', 'border-slate-300', 'text-center', 'text-sm', 'shadow-md', 'overflow-hidden');

  card.innerHTML = `
      <button class="absolute top-3 right-3 user-menu-btn">
          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-dots-vertical" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
            <path d="M12 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
            <path d="M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
          </svg>
        </button>
        
        <div class="flex flex-col gap-2 absolute left-0 top-0 user-menu bg-white border-r border-b rounded-br-md text-xs">
          <p class="flex items-center gap-1 py-2 pl-3">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-message-circle" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#f87171" fill="none" stroke-linecap="round" stroke-linejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <path d="M3 20l1.3 -3.9c-2.324 -3.437 -1.426 -7.872 2.1 -10.374c3.526 -2.501 8.59 -2.296 11.845 .48c3.255 2.777 3.695 7.266 1.029 10.501c-2.666 3.235 -7.615 4.215 -11.574 2.293l-4.7 1" />
  </svg>
            Message
          </p>
          <p class="flex items-center gap-1 py-2 pl-3">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-message-report" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#f87171" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12z" />
              <path d="M12 8v3" />
              <path d="M12 14v.01" />
            </svg>
            Report
          </p>
          <p class="flex items-center gap-1 py-2 pl-3">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-share" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#f87171" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M6 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
              <path d="M18 6m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
              <path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
              <path d="M8.7 10.7l6.6 -3.4" />
              <path d="M8.7 13.3l6.6 3.4" />
            </svg> 
            Share
          </p>
        </div>
        
          <img src="${user.img}" alt="" class="w-[70px] h-[70px] rounded-full object-cover mx-auto border-2 border-red-300">
          
          <h3 class="font-bold text-base mt-2">${user.name}</h3>
          <p class="text-slate-400 mt-1 mb-4">${user.tag}</p>
          
          <button class="w-[120px] py-2 rounded-full bg-red-500 text-white transition-all border-2 border-red-500 mx-auto hover:bg-white hover:text-slate-900">Add contact</button>
    `;

  return card;
};

// User menu event listeners
const handleUserMenuHover = (menu) => {
  menu.classList.add('toggle-user-menu');
};

const handleUserMenuLeave = (menu) => {
  menu.classList.remove('toggle-user-menu');
};

// DOM manipulation
const initializeUserProfiles = () => {
  const header = document.querySelector('.header');
  const userProfiles = document.querySelector('.user-profiles');
  const continueBtn = document.getElementById('continue-btn');

  // Populate paid user images
  for (const user of usersPaid) {
    const item = document.createElement('div');
    item.classList.add('rounded-full', 'w-[60px]', 'h-[60px]', 'overflow-hidden', 'border-4', 'border-red-300', 'transition-all', 'hover:scale-110');
    item.appendChild(createImageElement(user)).classList.add('image-full');
    header.appendChild(item);
  }

  // Populate user cards
  for (const userData of userCards) {
    const card = createUserCardElement(userData);
    userProfiles.appendChild(card);
  }

  // User menu event listeners
  const userMenuBtns = document.querySelectorAll('.user-menu-btn');
  for (const btn of userMenuBtns) {
    btn.addEventListener('mouseenter', () => handleUserMenuHover(btn.nextElementSibling));
    btn.addEventListener('mouseleave', () => handleUserMenuLeave(btn.nextElementSibling));
  }

  // Continue button event listener
  continueBtn.addEventListener('click', () => {
    document.querySelector('.msg').style.display = 'none';
  });
};

// Initialize user profiles
initializeUserProfiles();
