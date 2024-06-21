// Auth Sayfasından Gelenler
export const authEle = {
  loginForm: document.querySelector("#login"),
  nameInp: document.querySelector("#name"),
  passwordInp: document.querySelector("#password"),
  nameArea: document.querySelector(".name-warning"),
  passArea: document.querySelector(".pass-warning"),
};
// Feed Sayfasından Gelenler
export const mainEle = {
  picture: document.querySelectorAll("#profile-pic"),
  username: document.querySelector("#user-name"),
  usertag: document.querySelector(".user-info #user-tag"),
  logoutbtn: document.querySelector(".user-info  #logout-btn"),
  tweetsArea: document.querySelector(".tweets-area"),
  main: document.querySelector("main"),
};

// Kullanıcı Verisini Render Eden Fonk.
export const renderUserInfo = (user) => {
  // Fotoğraf
  mainEle.picture.forEach((img) => {
    img.src = user.avatar;
  });

  // Kullanıcı adı ve isim için
  mainEle.username.innerText = user.name;
  mainEle.usertag.innerText = user.profile;
};

// Media Kısımını Render Eden Fonk.

const getMedia = (media) => {
  if (!media) return "";
  if (media.photo) {
    return `<img src=${media.photo[0].media_url_https}  />`;
  }
  if (media.video) {
    return `<video controls src=${media.video[0].variants[1].url}  `;
  }
  return "";
};

// Tweetleri Render Eden Fonk.

export const renderTweets = (tweets, user) => {
  // console.log(tweets);
  let timelineHTML = tweets
    .map(
      (tweet) => `   <div class="tweet">
          <img src="./images/x-logo .png" class="tweet-img" alt="" />
          <div class="body">
            <div class="user">
              <div class="info">
                <h6>${user.name} </h6>
                <p>${user.profile} </p>
                <p>${moment(tweet.created_at).fromNow()} </p>
              </div>
              <i class="bi bi-three-dots"></i>
            </div>
            <div class="user-content">
              <p>${tweet.text} </p>
              ${getMedia(tweet.media)}
            </div>

            <div class="buttons">
              <button><i class="bi bi-chat"></i> <span>${
                tweet.quotes
              } </span></button>
              <button><i class="bi bi-recycle"></i> <span>${
                tweet.retweets
              }</span></button>
              <button><i class="bi bi-heart"></i> <span>${
                tweet.favorites
              }</span></button>
              <button><i class="bi bi-bookmark"></i> <span>${
                tweet.bookmarks
              }</span></button>
            </div>
          </div>
        </div>`
    )
    .join("");
  mainEle.tweetsArea.innerHTML = timelineHTML;
};

export const renderLoader = (outlet) => {
  outlet.innerHTML = `
 <div class='d-flex justify-content-center mt-5'>
  <div class="spinner-border" role="status">
  <span class="sr-only"></span>
</div>
 </div>
  `;
};
