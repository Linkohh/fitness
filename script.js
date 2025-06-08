const exercises = [
    "Axe Hold",
    "Abdominal Stabilization",
    "Tricep Pushdown on Cable",
    "Step-ups",
    "commando pull-ups",
    "Single Arm Plank to Row",
    "Fingerboard 20 mm edge",
    "Cable Rear Delt Fly",
    "Incline Bench Reverse Fly - Hello",
    "Handstand Push Up",
    "Zone 2 Running",
    "LYING DUMBBELL ROW SS SEATED SHRUG",
    "Suspended crossess",
    "Biceps with TRX",
    "Kettlebell Swing",
    "Swimming 50m sprints",
    "Elliptical",
    "one-handed kettlebell curls",
    "Medicine ball booklet crunch",
    "Box Squat",
    "Knee Raises",
    "Sloper hanging",
    "Arnold Shoulder Press",
    "Barbell Hack Squats",
    "Dumbbell Push-Up",
    "Seated Hip Adduction",
    "Barbell Lunges Standing",
    "Barbell Lunges Walking",
    "Barbell Ab Rollout",
    "Barbell Triceps Extension",
    "Barbell Reverse Wrist Curl",
    "Bear Walk",
    "High knees",
    "Lunges",
    "Pullup on fingerboard",
    "Push-up rotations",
    "Side split squats left",
    "Side split squats right",
    "Bulgarian split squats left",
    "Bulgarian split squats right",
    "Kneeling kickbacks",
    "Split squats left",
    "Reverse Nordic Curl",
    "Straight Bar Cable Curls",
    "Cable Fly",
    "Split squats right",
    "Jump rope: basic jumps",
    "TRX Rows",
    "Leg raises pull up bar",
    "Forward arm circles",
    "Backward arm circles",
    "Mountain climbers",
    "4-count burpees",
    "No push-up burpees",
    "Reverse lunges",
    "Floor dips",
    "High plank",
    "Child's pose",
    "Kettlebell deadlifts",
    "Biceps Curls With Dumbbell",
    "Bent Over Rowing",
    "Body-Ups",
    "Bent Over Dumbbell Rows",
    "Biceps Curls With SZ-bar",
    "Bent-over Lateral Raises",
    "Benchpress Dumbbells",
    "Biceps Curls With Barbell",
    "Bench Press",
    "Bench Press Narrow Grip",
    "Biceps Curl With Cable",
    "One Arm Triceps Extensions on Cable",
    "Single Leg Extension",
    "Bent High Pulls",
    "Forward shoulder rotation",
    "Backward shoulder rotation",
    "Chin tuck",
    "Head turns",
    "Left neck stretch",
    "Right neck stretch",
    "Back neck stretch",
    "Alternating bicep curls",
    "Left levator scapulae stretch",
    "Right levator scapulae stretch",
    "Clockwise neck circles",
    "Counterclockwise neck circles",
    "Neck half circles",
    "Head tilts",
    "Side plank right",
    "Pistol squats right",
    "Calf raises, right leg",
    "Nordic Curl",
    "Reverse Preacher Curl (Close Grip)",
    "SMITH MACHINE SLIGHT INCLINE PRESS",
    "Close-grip Lat Pull Down",
    "Braced Squat",
    "Barbell Wrist Curl",
    "Calf Press Using Leg Press Machine",
    "Chin-ups",
    "Calf Raises on Hackenschmitt Machine",
    "Butterfly Narrow Grip",
    "Ball crunches",
    "Butterfly",
    "Crunches on Machine",
    "Burpees",
    "Incline Crunches",
    "Butterfly Reverse",
    "Crunches",
    "Crunches With Legs Up",
    "Chest Press",
    "Cross-Bench Dumbbell Pullovers",
    "Deadhang",
    "Cycling",
    "Cable Woodchoppers",
    "Deadbug",
    "Chin Up",
    "Deficit Deadlift",
    "Flutter Kicks",
    "Deadlifts",
    "Facepull",
    "Diagonal Shoulder Press",
    "Dumbbell Goblet Squat",
    "Decline Bench Press Barbell",
    "Decline Bench Press Dumbbell",
    "Dumbbell Lunges Standing",
    "Reverse EZ Bar Cable Curls",
    "Machine chest fly",
    "Decline Pushups",
    "Fly With Cable",
    "Dumbbell Lunges Walking",
    "Fly With Dumbbells, Decline Bench",
    "Fly With Dumbbells",
    "Dumbbell Incline Curl",
    "Dumbbell Triceps Extension",
    "Dips",
    "Dips Between Two Benches",
    "Dumbbells on Scott Machine",
    "Front Raises with Plates",
    "Hanging Leg Raises",
    "Front Raises",
    "Hyperextensions",
    "Hindu Squats",
    "Front Squats",
    "High Knee Jumps",
    "Hammercurls on Cable",
    "Barbell Hip Thrust",
    "BUS DRIVERS",
    "Hammercurls",
    "Hand Grip",
    "Skullcrusher Dumbbells",
    "Skullcrusher SZ-bar",
    "Hip Raise, Lying",
    "Front Pull narrow",
    "Front pull wide",
    "Hercules Pillars",
    "Handstand Pushup",
    "Hip Thrust",
    "High Pull",
    "Glute Bridge",
    "Hollow Hold",
    "Good Mornings",
    "Incline Dumbbell Row",
    "Front Plate Raise",
    "Leg Curls (laying)",
    "Lat Pull Down (Leaning Back)",
    "Lat Pull Down (Straight Back)",
    "Leg Curls (sitting)",
    "Lateral Rows on Cable, One Armed",
    "Lateral Raises",
    "Barbell Hip Thrust",
    "Smith Press",
    "Isometric Wipers",
    "Leg Curl",
    "Lateral-to-Front Raises",
    "Incline Push up",
    "Squats on Multipress",
    "Incline Dumbbell Fly",
    "Jumping Jacks",
    "Incline Plank With Alternate Floor Touch",
    "Kettlebell Swings",
    "Landmine press",
    "Cable Cross-over",
    "Jogging",
    "Leverage Machine Iso Row",
    "Long-Pulley, Narrow",
    "Negative Crunches",
    "Military Press mit SZ-Bar",
    "Diamond push ups",
    "Leg Raises, Standing",
    "Straight Bar Cable Front Raise",
    "Leverage Machine Chest Press",
    "Quadriped Arm and Leg Raise",
    "Leg Raises, Lying",
    "Leg Raise",
    "Long-Pulley (low Row)",
    "Low Box Squat - Wide Stance",
    "Lying Rotator Cuff Exercise",
    "Leg Curls (standing)",
    "Leg Press on Hackenschmidt Machine",
    "Leg Presses (narrow)",
    "Leg Presses (wide)",
]

const exerciseInfo = {
  "Handstand Push Up": {
    description: "Press your body vertically while in a handstand position.",
    main: "Shoulders, triceps",
    secondary: "Upper chest, core"
  },
  "Kettlebell Swing": {
    description: "Explosively swing the kettlebell between your legs using hip drive.",
    main: "Glutes, hamstrings",
    secondary: "Lower back, core, shoulders"
  },
  "Box Squat": {
    description: "Squat to a box to control depth and build power.",
    main: "Quadriceps, glutes",
    secondary: "Hamstrings"
  },
  "Pullup on fingerboard": {
    description: "Pull yourself up using a fingerboard to develop grip strength.",
    main: "Lats, biceps",
    secondary: "Forearms"
  },
  "Bench Press": {
    description: "Press a barbell from your chest while lying on a bench.",
    main: "Pectorals, triceps",
    secondary: "Front deltoids"
  },
  "Lunges": {
    description: "Step forward and lower your body until both knees bend to 90 degrees.",
    main: "Quadriceps, glutes",
    secondary: "Hamstrings, calves"
  },
  "Tricep Pushdown on Cable": {
    description: "Extend your arms downward on a cable machine to isolate the triceps.",
    main: "Triceps",
    secondary: "Shoulders, core"
  },
  "Elliptical": {
    description: "Low-impact cardio performed on an elliptical trainer.",
    main: "Cardiovascular system",
    secondary: "Glutes, hamstrings"
  },
  "Axe Hold": {
    description: "Hold a weighted axe or similar object for time to build forearm and grip strength.",
    main: "Forearms",
    secondary: "Shoulders"
  },
  "Abdominal Stabilization": {
    description: "Maintain a braced core position to improve overall stability.",
    main: "Abdominals",
    secondary: "Lower back"
  },
  "Step-ups": {
    description: "Step onto a raised platform one leg at a time to strengthen the legs and glutes.",
    main: "Quadriceps, glutes",
    secondary: "Hamstrings"
  },
  "commando pull-ups": {
    description: "Alternate your grip as you pull your body up so one shoulder passes the bar at a time.",
    main: "Back, biceps",
    secondary: "Core"
  },
  "Single Arm Plank to Row": {
    description: "Hold a plank while rowing a dumbbell with one arm.",
    main: "Core",
    secondary: "Back, shoulders"
  },
  "Fingerboard 20 mm edge": {
    description: "Hang from a 20 mm edge to improve finger strength for climbing.",
    main: "Forearms",
    secondary: "Grip"
  },
  "Cable Rear Delt Fly": {
    description: "Pull the cables outward to isolate the rear deltoids.",
    main: "Rear delts",
    secondary: "Upper back"
  },
  "Incline Bench Reverse Fly - Hello": {
    description: "Lie on an incline bench and raise the dumbbells out to the side to hit the rear delts.",
    main: "Rear delts",
    secondary: "Upper back"
  }
};

const selectEl = document.getElementById('exerciseInput');
const dataListEl = document.getElementById('exerciseList');
const tableBody = document.querySelector('#planTable tbody');
const descEl = document.getElementById('desc');
const mainEl = document.getElementById('mainMuscles');
const secEl = document.getElementById('secondaryMuscles');

// Populate datalist
exercises.forEach(name => {
  const opt = document.createElement('option');
  opt.value = name;
  dataListEl.appendChild(opt);
});

function updateInfo() {
  const info = exerciseInfo[selectEl.value];
  if (info) {
    descEl.textContent = info.description;
    mainEl.textContent = info.main;
    secEl.textContent = info.secondary;
  } else {
    descEl.textContent = 'No description available.';
    mainEl.textContent = 'N/A';
    secEl.textContent = 'N/A';
  }
}

selectEl.addEventListener('input', updateInfo);
updateInfo();

document.getElementById('addBtn').addEventListener('click', () => {
  const exercise = selectEl.value;
  const sets = document.getElementById('setsInput').value;
  const reps = document.getElementById('repsInput').value;
  const time = document.getElementById('timeInput').value;
  const brk = document.getElementById('breakInput').value;
  const intensity = document.getElementById('intensityInput').value;

  const info = exerciseInfo[exercise];
  const description = info ? info.description : 'N/A';
  const muscles = info ? `${info.main}${info.secondary ? ' / ' + info.secondary : ''}` : 'N/A';

  const row = document.createElement('tr');
  row.innerHTML = `
    <td>${exercise}</td>
    <td>${sets}</td>
    <td>${reps}</td>
    <td>${time}</td>
    <td>${brk}</td>
    <td>${intensity}</td>
    <td>${description}</td>
    <td>${muscles}</td>
    <td class="actions">
      <button class="edit-row">Edit</button>
      <button class="delete-row">Delete</button>
    </td>
  `;
  tableBody.appendChild(row);

  row.querySelector('.delete-row').addEventListener('click', () => {
    row.remove();
  });

  row.querySelector('.edit-row').addEventListener('click', () => {
    selectEl.value = exercise;
    document.getElementById('setsInput').value = sets;
    document.getElementById('repsInput').value = reps;
    document.getElementById('timeInput').value = time;
    document.getElementById('breakInput').value = brk;
    document.getElementById('intensityInput').value = intensity;
    updateInfo();
    row.remove();
  });
});

document.getElementById('clearBtn').addEventListener('click', () => {
  tableBody.innerHTML = '';
});

function getPlanText() {
  let text = 'My Workout Plan:\n';
  tableBody.querySelectorAll('tr').forEach(row => {
    const cells = row.querySelectorAll('td');
    if (cells.length > 0) {
      text += `${cells[0].textContent} - ${cells[1].textContent} sets x ${cells[2].textContent} reps\n`;
    }
  });
  return text;
}

const shareBtn = document.getElementById('shareBtn');
const shareMenu = document.getElementById('shareMenu');
shareBtn.addEventListener('click', () => {
  shareMenu.parentElement.classList.toggle('show');
});

document.getElementById('shareTwitter').addEventListener('click', () => {
  const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(getPlanText())}`;
  window.open(url, '_blank');
});

document.getElementById('shareFacebook').addEventListener('click', () => {
  const url = `https://www.facebook.com/sharer/sharer.php?u=&quote=${encodeURIComponent(getPlanText())}`;
  window.open(url, '_blank');
});

document.getElementById('shareEmail').addEventListener('click', () => {
  location.href = `mailto:?subject=My Workout Plan&body=${encodeURIComponent(getPlanText())}`;
});

document.getElementById('downloadPdf').addEventListener('click', () => {
  const doc = new jspdf.jsPDF();
  doc.text('My Workout Plan', 10, 10);
  let y = 20;
  tableBody.querySelectorAll('tr').forEach(row => {
    const cells = row.querySelectorAll('td');
    const line = `${cells[0].textContent} - ${cells[1].textContent} sets x ${cells[2].textContent} reps`;
    doc.text(line, 10, y);
    y += 10;
  });
  doc.save('workout_plan.pdf');
});

