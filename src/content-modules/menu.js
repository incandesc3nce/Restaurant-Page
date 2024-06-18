export const fillMenuContent = () => {
  const content = document.querySelector('#content');
  const heading = document.createElement('div');
  heading.classList.add('heading');

  const heading_h1 = document.createElement('h1');
  heading_h1.textContent = 'Our Menu';
  const heading_p = document.createElement('p');
  heading_p.textContent = 'Discover the perfect coffee for you';

  heading.appendChild(heading_h1);
  heading.appendChild(heading_p);

  content.appendChild(heading);


  const menu = document.createElement('div');
  menu.classList.add('menu-container');

  content.appendChild(menu);

  const coffeeDrinks = {
    names: ['Espresso', 'Americano', 'Latte', 'Cappuccino', 'Mocha', 'Iced Coffee', 'Flat White', 'Irish Coffee'],
    desc: ['Pure, bold, and always on point', 'For those who appreciate the simplicity of good coffee', 'Your morning hug in a cup', 'The art of coffee, in every cup', 'A coffee hug, with a chocolate kiss', 'Refreshing, invigorating, and perfect for any occasion', 'A subtle yet sophisticated coffee indulgence', 'Warm, comforting, and a little bit naughty'],
    prices: ['$2.49', '$2.99', '$3.49', '$3.79', '$3.99', '$3.99', '$3.99', '$4.29']
  }

  for (let i = 0; i < coffeeDrinks.names.length; i++) {
    const coffeeCard = document.createElement('div');
    coffeeCard.classList.add('coffee-card');

    const img = document.createElement('img');
    img.src = '../assets/images/stock_coffee.png';
    img.alt = 'Cup of coffee';

    const info = document.createElement('div');
    info.classList.add('info');

    const name = document.createElement('p');
    name.classList.add('name');
    name.textContent = coffeeDrinks.names[i];

    const desc = document.createElement('p');
    desc.classList.add('desc');
    desc.textContent = coffeeDrinks.desc[i];

    const price = document.createElement('p');
    price.classList.add('price');
    price.textContent = coffeeDrinks.prices[i];

    info.appendChild(name);
    info.appendChild(desc);
    info.appendChild(price);

    coffeeCard.appendChild(img);
    coffeeCard.appendChild(info);

    menu.appendChild(coffeeCard);
    }
}