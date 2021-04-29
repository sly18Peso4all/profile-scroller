const data = [
  {
    name: "Daniel Lips",
    age: 32,
    gender: "male",
    lookingFor: "female",
    location: "Boston MA",
    image: "https://randomuser.me/api/portraits/men/82.jpg",
  },
  {
    name: "Tessy Erlang Dave",
    age: 34,
    gender: "female",
    lookingFor: "male",
    location: "New York",
    image: "https://randomuser.me/api/portraits/women/81.jpg",
  },
  {
    name: "Martin Zoe",
    age: 42,
    gender: "male",
    lookingFor: "female",
    location: "California",
    image: "https://randomuser.me/api/portraits/men/22.jpg",
  },
  {
    name: "Julia Bradt",
    age: 30,
    gender: "female",
    lookingFor: "male",
    location: "Bahamas",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
  },
];
const profiles = profileIterator(data);

nextProfile();

document.getElementById("next").addEventListener("click", nextProfile);

function nextProfile() {
  const currentProfile = profiles.next().value;

  if (currentProfile !== undefined) {
    document.getElementById("profileDisplay").innerHTML = `
    <ul class="list-group">
      <li class="list-group-item">Name: ${currentProfile.name} </li>
      <li class="list-group-item">Age: ${currentProfile.age} </li>
      <li class="list-group-item">Location: ${currentProfile.location} </li>
      <li class="list-group-item">:Preference: ${currentProfile.gender} looking for ${currentProfile.lookingFor} </li>
    </ul>
  `;

    document.getElementById(
      "imageDisplay"
    ).innerHTML = `<img src="${currentProfile.image}">`;
  } else {
    window.location.reload();
  }
}

function profileIterator(profiles) {
  let nextIndex = 0;

  return {
    next: function () {
      return nextIndex < profiles.length
        ? { value: profiles[nextIndex++], done: false }
        : { done: true };
    },
  };
}
