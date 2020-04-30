const data = [
  {
    text: "<hr /><hr /><hr /><hr /><hr />",
  },
  {
    text:
      "<hr class='image'><hr /><hr /><hr /><hr /><hr /><hr class='image'><hr />",
  },
  {
    text: "<hr class='image'><hr /><hr /><hr /><hr /><hr />",
  },
  {
    text: "<hr /><hr /><hr /><hr /><hr />",
  },
  {
    text: "<hr /><hr /><hr /><hr /><hr />",
  },
  {
    text: "<hr /><hr /><hr /><hr /><hr /><hr class='image'><hr class='image'>",
  },
  {
    text: "<hr /><hr /><hr /><hr /><hr />",
  },
  {
    text: "<hr /><hr /><hr /><hr /><hr />",
  },
  {
    text: "<hr /><hr /><hr /><hr /><hr />",
  },
  {
    text: "<hr /><hr /><hr /><hr /><hr />",
  },
  {
    text: "<hr /><hr /><hr /><hr /><hr />",
  },
  {
    text: "<hr /><hr /><hr /><hr /><hr />",
  },
  {
    text: "<hr /><hr /><hr /><hr /><hr />",
  },
  {
    text: "<hr /><hr /><hr /><hr /><hr />",
  },
  {
    text: "<hr /><hr /><hr /><hr /><hr />",
  },
  {
    text: "<hr /><hr /><hr /><hr /><hr />",
  },
];

class News {
  constructor(number, text) {
    this.number = number;
    this.text = text;
    this.modified = false;
  }

  update(text) {
    this.text = text;
    this.modified = true;
  }
}

class NewsPrinter {
  constructor(news) {
    this.news = news;
  }

  html() {
    return `
    <article class="article">
      ${this.news.number}
      ${this.news.text}
    </article>
    `;
  }
}

function render(location, post) {
  document.getElementById(location).insertAdjacentHTML("beforeend", post);
}

for (const [index, article] of data.entries()) {
  const post = new NewsPrinter(new News(index + 1, article.text));
  console.log(post);
  render("archive", post.html());
}
