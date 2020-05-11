/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

  axios.get('https://api.github.com/users/karminer60')
    .then(response => {
      const dataKarina = response.data;
      const cards = document.querySelector('.cards');
      const card = cardMaker(dataKarina);
      cards.appendChild(card);
    })
    .catch(error => {
      console.log('Get data failed');
    })
    .finally(() => {
      console.log('done');
    })


/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = ['tetondan','dustinmyers','justsml','luishrd','bigknell'];
followersArray.forEach(friend => {
  axios.get(`https://api.github.com/users/${friend}`)
    .then(response => {
      const dataFriend = response.data;
      const cards = document.querySelector('.cards');
      const card = cardMaker(dataFriend);
      cards.appendChild(card);
    })
});
/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

function cardMaker(cardAttr){
  const { avatar_url, name, login, location, html_url, followers, following, bio } = cardAttr  

  const card = document.createElement('div')
  const imageS = document.createElement('img')
  const cardInfo = document.createElement('div')
  const nameUser = document.createElement('h3')
  const usernameId = document.createElement('p')
  const locationPlace = document.createElement('p')
  const profile = document.createElement('p')
  const addressLink = document.createElement('a')
  const followersCount = document.createElement('p')
  const followingCount = document.createElement('p')
  const bioDesc = document.createElement('p')


  card.appendChild(imageS)
  card.appendChild(cardInfo)
  cardInfo.appendChild(nameUser)
  cardInfo.appendChild(usernameId)
  cardInfo.appendChild(locationPlace)
  cardInfo.appendChild(profile)
  cardInfo.appendChild(followersCount)
  cardInfo.appendChild(followingCount)
  cardInfo.appendChild(bioDesc)
  profile.appendChild(addressLink)
  
  

  
  card.classList.add('card')
  cardInfo.classList.add('card-info')
  nameUser.classList.add('name')
  usernameId.classList.add('username')
  
  
 
  nameUser.textContent = name
  imageS.src = avatar_url
  usernameId.textContent = login
  locationPlace.textContent = location
  addressLink.textContent = 'Github link' 
  addressLink.href= html_url
  followersCount.textContent = 'Followers: ' + followers
  followingCount.textContent = 'Following: ' + following
  bioDesc.textCount = bio



  
return card;

}






/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
