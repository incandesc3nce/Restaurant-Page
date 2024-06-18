export const fillAboutContent = () => {
  const content = document.querySelector('#content');

  const heading = document.createElement('div');
  heading.classList.add('heading');

  const heading_h1 = document.createElement('h1');
  heading_h1.textContent = 'About Us';

  heading.appendChild(heading_h1);

  content.appendChild(heading);


  const about = document.createElement('div');
  about.classList.add('about');

  content.appendChild(about);

  const about_heading1 = document.createElement('h2');
  about_heading1.textContent = 'How we started';

  const about1_p1 = document.createElement('p');
  about1_p1.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit repellat id aliquam, ipsum eligendi tenetur, quidem obcaecati quasi minima quibusdam, veniam illo qui minus voluptatem omnis itaque dolores eveniet temporibus.';
  const about1_p2 = document.createElement('p');
  about1_p2.textContent = 'Consequuntur nihil quo quidem sint voluptates. Sequi ea sit voluptatem at asperiores molestias necessitatibus sunt quidem repellendus consequuntur quasi tempora, aut quam, voluptatum ullam laudantium, nam animi debitis illum! Consequuntur.';
  const about1_p3 = document.createElement('p');
  about1_p3.textContent = 'Necessitatibus corrupti aut voluptatem fugit vitae voluptatibus debitis maiores eligendi culpa! Quia exercitationem voluptatum doloribus aliquam earum, odit dignissimos. Delectus eos possimus itaque quas cupiditate rem ab doloremque sit quia?';
  const about1_p4 = document.createElement('p');
  about1_p4.textContent = 'Nam suscipit dicta ut facilis. Tenetur magnam minus molestiae nisi reiciendis, in iste nesciunt nihil nobis assumenda, fugit eum asperiores alias repellat error. Nulla dolorum nemo ab quos, tempora velit!';

  about.appendChild(about_heading1);
  about.appendChild(about1_p1);
  about.appendChild(about1_p2);
  about.appendChild(about1_p3);
  about.appendChild(about1_p4);


  const about_heading2 = document.createElement('h2');
  about_heading2.textContent = 'Our mission';

  const about2_p1 = document.createElement('p');
  about2_p1.textContent = 'Placeat sequi aperiam labore atque cumque dolore excepturi ipsa expedita temporibus sed hic dignissimos qui modi provident, ex quidem explicabo porro voluptas. Aspernatur veritatis esse dignissimos, praesentium repellendus reiciendis doloribus?';

  about.appendChild(about_heading2);
  about.appendChild(about2_p1);

  const about_heading3 = document.createElement('h2');
  about_heading3.textContent = 'Our vision';

  const about3_p1 = document.createElement('p');
  about3_p1.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus veniam iste pariatur animi blanditiis enim aspernatur quibusdam officiis eos provident fuga placeat a dignissimos quisquam minus, numquam, iusto facere. Veniam!';

  about.appendChild(about_heading3);
  about.appendChild(about3_p1);

  const about_heading4 = document.createElement('h2');
  about_heading4.textContent = 'How we make such a good coffee?';

  const about4_p1 = document.createElement('p');
  about4_p1.textContent = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus illo nisi tenetur, dolores sapiente dolorum voluptatibus doloremque mollitia nemo ipsam minima cum quibusdam ea rem, vero sit inventore officia fugiat. Obcaecati aspernatur at cumque placeat dolor voluptatem cum ipsam vitae sed explicabo culpa quidem quisquam veritatis, dicta esse eligendi perspiciatis non in ad natus officia. Rerum fuga tempore eius tenetur.";

  about.appendChild(about_heading4);
  about.appendChild(about4_p1);
}