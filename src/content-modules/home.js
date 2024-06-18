export const fillHomeContent = () => {
  const content = document.querySelector('#content');
  
  const heading = document.createElement('div');
  heading.classList.add('heading');

  const heading_h1 = document.createElement('h1')
  heading_h1.textContent = 'Calm Coffee';
  const heading_p = document.createElement('p');
  heading_p.textContent = 'Feel at ease with our coffee';

  heading.appendChild(heading_h1);
  heading.appendChild(heading_p);


  const home = document.createElement('div');
  home.classList.add('home');
  
  const p_begin = document.createElement('p');
  p_begin.textContent = "We're more than just a coffee shop. We're a sanctuary, a haven for the weary soul seeking a moment of peace. Step inside and let the gentle murmur of conversation and the aroma of freshly brewed coffee wash over you.";
  const before_list = document.createElement('p');
  before_list.textContent = "Here, you'll find:";

  const home_list = document.createElement('ul');
  home_list.appendChild(document.createElement('li')).textContent = "• A serene atmosphere designed to soothe the mind and uplift the spirit.";
  home_list.appendChild(document.createElement('li')).textContent = "• High-quality coffee roasted to perfection, offering a range of blends to satisfy every palate.";
  home_list.appendChild(document.createElement('li')).textContent = "• Delicious pastries and treats to tempt your taste buds and fuel your creativity.";
  home_list.appendChild(document.createElement('li')).textContent = "• A haven for contemplation - sink into a comfy armchair, open a book, or simply enjoy the quiet moments.";
  home_list.classList.add('home-list');

  const after_list = document.createElement('p');
  after_list.textContent = "At Calm Coffee, your well-being is our priority. We believe that everyone deserves a space to unwind and recharge, and we're here to provide just that. ";
  after_list.id = 'after-list';

  const home_final = document.createElement('p');
  home_final.textContent = "Come find your calm.";
  home_final.id = 'home-final';

  content.appendChild(heading);
  content.appendChild(home);
  home.appendChild(p_begin);
  home.appendChild(before_list);
  home.appendChild(home_list);
  home.appendChild(after_list);
  home.appendChild(home_final);


  const location = document.createElement('div');
  location.classList.add('location');

  const location_h2 = document.createElement('h2');
  location_h2.textContent = 'Our Location';

  const location_address = document.createElement('address');

  const address = document.createElement('div');
  address.textContent = '555 Coffee Temptation Lane, Suite C';
  const address_2 = document.createElement('div');
  address_2.textContent = 'Gotham City; MO 55555-5555';
  address.appendChild(address_2);

  location_address.appendChild(address);

  const phone = document.createElement('div');
  phone.textContent = 'Phone: 555-555-5555';

  const work_hours = document.createElement('div');
  work_hours.textContent = 'Work hours: 8:00 - 22:00';

  location.appendChild(location_h2);
  location.appendChild(location_address);
  location_address.appendChild(phone);
  location_address.appendChild(work_hours);

  content.appendChild(location);
};