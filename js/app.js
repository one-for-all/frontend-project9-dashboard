const newMembers = [
  {
    name: 'Victoria Chambers',
    email: 'victoria.chambers80@example.com',
    date: '07/11/17',
    image: 'icons/user1.jpg'
  },
  {
    name: 'Dale Byrd',
    email: 'dale.byrd52@example.com',
    date: '07/11/17',
    image: 'icons/user2.jpg'
  },
  {
    name: 'Dawn Wood',
    email: 'dawn.wood16@example.com',
    date: '07/11/17',
    image: 'icons/user3.jpg'
  },
  {
    name: 'Dan Oliver',
    email: 'dan.oliver82@example.com',
    date: '07/11/17',
    image: 'icons/user4.jpg'
  }
];

const activities = [
  {
    activity: "Victoria Chambers commented on YourApp's SEO Tips",
    time: '4 hours ago',
    image: 'icons/user1.jpg'
  },
  {
    activity: "Dale Byrd like the post Facebook's Changes for 2016",
    time: '5 hours ago',
    image: 'icons/user2.jpg'
  },
  {
    activity: "Dawn Wood commented on Facebook's Challenges for 2016",
    time: '5 hours ago',
    image: 'icons/user3.jpg'
  },
  {
    activity: "Dan Oliver posted YourApp's SEO Tips",
    time: '1 day ago',
    image: 'icons/user4.jpg'
  }
];

for (let i = 0; i < newMembers.length; i += 1) {
  let li = `
    <li>
      <img src="${newMembers[i].image}" alt="user icon" class='user-icon'>
      <div class="new-user-info">
        <h2 class='username'>${newMembers[i].name}</h2>
        <span class='user-email'>${newMembers[i].email}</span>
      </div>
      <span class='date'>${newMembers[i].date}</span>
    </li>
  `;
  $('.new-members-ul').append(li);
}

for (let i = 0; i < activities.length; i += 1) {
  let li = `
    <li>
      <img src="${activities[i].image}" alt="user icon" class='user-icon'>
      <div class="user-activity">
        <p class='activity'>${activities[i].activity}</p>
        <span class='time'>${activities[i].time}</span>
      </div>
    </li>
  `;
  $('.recent-activity-ul').append(li);
}

$('.message-user-form').on('submit', (e) => {
  e.preventDefault();
  const user = $('.search-user').val();
  if (user === '') {
    alert('User cannot be empty');
    return;
  }
  const message = $('.message-user').val();
  if (message === '') {
    alert('Message cannot be empty');
    return;
  }
  alert("Success: Message sent.");
  $('.search-user').val('');
  $('.message-user').val('');
});

$('.save-button').click((e) => {
  e.preventDefault();
});

$('.close-button').on('click', () => {
  $('.alert').animate({
    height: 0
  }, 500, () => {
    $('.alert').animate({
      'margin-top': 0
    }, 500);
  });
});
