// Placeholder for raccoon facts
const raccoonFacts = [
    "Raccoons are highly intelligent and can solve puzzles in less than ten attempts.",
    "Raccoons have dexterous front paws with five fingers, allowing them to open jars and doors.",
    "Raccoons are nocturnal, meaning they are most active at night.",
    "Raccoons are omnivores, eating a diet that includes fruits, nuts, insects, and small animals.",
    "Raccoons are excellent climbers and often make their homes in trees.",
    "Raccoons can be found in urban, suburban, and rural areas across North America.",
    "Raccoons wash their food in water, a behavior thought to enhance their sense of touch.",
    "Raccoons are known for the distinctive black mask of fur around their eyes.",
    "Raccoons communicate through a variety of sounds, including chirps, growls, and purrs.",
    "Raccoons have a highly developed sense of touch, with most sensory nerves concentrated in their paws.",
    "Raccoons can run at speeds of up to 15 miles per hour when threatened.",
    "Raccoons have a lifespan of 2-3 years in the wild but can live over 20 years in captivity.",
    "Raccoons are native to North America but have been introduced to parts of Europe and Asia.",
    "Raccoons are capable of remembering solutions to tasks for up to three years.",
    "Raccoons typically weigh between 8 and 20 pounds, depending on their habitat and diet.",
    "Raccoons have sharp claws that help them climb and dig for food.",
    "Raccoons are solitary animals but sometimes form groups called nurseries.",
    "Raccoons give birth to litters of 2-5 kits, which stay with their mother for up to a year.",
    "Raccoons' tails are ringed with alternating light and dark bands of fur.",
    "Raccoons have adapted well to living near humans and often forage in garbage bins.",
    "Raccoons are immune to some venomous snake bites due to unique proteins in their blood.",
    "Raccoons have a double-layered coat of fur to keep them warm in the winter.",
    "Raccoons have a unique way of walking, placing their back foot in the same spot as their front foot.",
    "Raccoons prefer habitats near water, such as rivers, lakes, and wetlands.",
    "Raccoons use their sharp teeth to eat a wide variety of foods, including shellfish.",
    "Raccoons are a symbol of cleverness and adaptability in many Native American cultures.",
    "Raccoons hibernate in colder climates but stay active year-round in milder areas.",
    "Raccoons have an excellent memory and can recall locations of food sources.",
    "Raccoons are part of the Procyonidae family, which also includes coatis and kinkajous.",
    "Raccoons are known to steal shiny objects, although this behavior is not common in the wild.",
    "Raccoons use their sense of touch more than sight or smell to explore their environment.",
    "Raccoons are preyed upon by animals such as coyotes, bobcats, and owls.",
    "Raccoons have a unique ability to adapt to various environments, including urban settings.",
    "Raccoons have been observed using tools in captivity, showing problem-solving abilities.",
    "Raccoons are known for their agility and can squeeze into small spaces to find shelter.",
    "Raccoons have a distinctive gait called a 'rolling' walk, due to their short legs.",
    "Raccoons' black eye masks help reduce glare and improve their vision at night.",
    "Raccoons groom themselves regularly to keep their fur clean and free of parasites.",
    "Raccoons can swim well and often use water to escape predators.",
    "Raccoons have a flexible diet, which has allowed them to thrive in diverse environments.",
    "Raccoons have been depicted in folklore and myths around the world, often as tricksters.",
    "Raccoons are most active during the spring and fall when food is abundant.",
    "Raccoons are sometimes called 'trash pandas' because of their appearance and scavenging habits.",
  ];

// content.js


/**
 * Return a random raccoon fact
 */
function getRandomRaccoonFact() {
  const index = Math.floor(Math.random() * raccoonFacts.length);
  return raccoonFacts[index];
}

// We'll store a reference to our single observer here
let observer = null;

/**
 * Safely modify the DOM by disconnecting the observer first,
 * then reconnecting after the callback finishes.
 */
function safeModifyDOM(callback) {
  if (observer) observer.disconnect();
  try {
    callback();
  } finally {
    if (observer) {
      observer.observe(document.body, {
        childList: true,
        subtree: true,
        characterData: true
      });
    }
  }
}

/**
 * Initialize the extension on page load by checking stored settings.
 */
function initializeExtension() {
  browser.storage.local.get("filterEnabled").then((data) => {
    if (data.filterEnabled) {
      console.log("De-Muskifier: Initializing on page load");
      enableReplacements();
    }
  });
}

/**
 * Enable replacements on any site (including X.com).
 */
function enableReplacements() {
  console.log("De-Muskifier: Enabled");

  // Run replacements immediately
  runReplacements();

  // If we already had an observer, disconnect it first
  if (observer) {
    observer.disconnect();
  }

  // Create a new observer to watch for added nodes in the DOM
  observer = new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.addedNodes && mutation.addedNodes.length > 0) {
        runReplacements();
        break; // We only need to run once per batch
      }
    }
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true,
    characterData: true,
  });
}

/**
 * Disable replacements by disconnecting the observer.
 */
function disableReplacements() {
  console.log("De-Muskifier: Disabled");
  if (observer) {
    observer.disconnect();
    observer = null;
  }
}

/**
 * Calls all the “de-Muskify” functions in one shot.
 */
function runReplacements() {
  findAndReplaceText();
  findAndReplaceImages();
  replaceElonMuskProfileAndPosts();
}

// ----------------------------------------------------------------------
// 1. Replace text referencing "elon", "musk", etc. with a random fact
// ----------------------------------------------------------------------
function findAndReplaceText() {
  const keywords = /elon musk|elon|musk|spacex|tesla/i;
  const walker = document.createTreeWalker(
    document.body,
    NodeFilter.SHOW_TEXT,
    null,
    false
  );

  let node;
  while ((node = walker.nextNode())) {
    if (node.nodeValue.match(keywords)) {
      replaceTextNode(node);
    }
  }
}

function replaceTextNode(node) {
  const randomFact = getRandomRaccoonFact();
  console.log(`Replacing text: "${node.nodeValue.trim()}" -> "${randomFact}"`);
  node.nodeValue = randomFact;

  // Optionally replace a nearby image
  const parentElement = node.parentElement;
  if (parentElement) {
    const nearbyImage = parentElement.querySelector("img");
    if (nearbyImage) {
      replaceImageElement(nearbyImage);
    }
  }
}

// ----------------------------------------------------------------------
// 2. Replace images containing Musk/Tesla/SpaceX references
// ----------------------------------------------------------------------
function findAndReplaceImages() {
  const images = document.querySelectorAll("img");
  images.forEach((img) => {
    const altText = img.alt.toLowerCase();
    const src = img.src.toLowerCase();

    if (
      altText.includes("elon musk") ||
      altText.includes("elon_musk") ||
      src.includes("elonmusk") ||
      src.includes("elon_musk") ||
      src.includes("elon") ||
      src.includes("musk") ||
      src.includes("spacex") ||
      src.includes("tesla")
    ) {
      replaceImageElement(img);
    }
  });

  // Also handle <picture> elements
  const pictures = document.querySelectorAll("picture");
  pictures.forEach((picture) => {
    replacePictureElement(picture);
  });
}

function replaceImageElement(img) {
  const baseURL = "https://raw.githubusercontent.com/datitran/raccoon_dataset/refs/heads/master/images/raccoon-";
  const randomImageNumber = Math.floor(Math.random() * 200) + 1;
  const newSrc = `${baseURL}${randomImageNumber}.jpg`;

  const randomFact = getRandomRaccoonFact();
  console.log(`Replacing image: ${img.src} -> ${newSrc} | Alt: ${randomFact}`);

  img.src = newSrc;
  img.srcset = ""; // Clear srcset
  img.alt = randomFact;

  replaceCaption(img);
}

function replaceCaption(img) {
  const randomFact = getRandomRaccoonFact();
  const possibleCaption =
    img.closest("figure")?.querySelector("figcaption") ||
    img.nextElementSibling;

  if (possibleCaption && possibleCaption.innerText.trim() !== "") {
    console.log(`Replacing caption with: "${randomFact}"`);
    possibleCaption.innerText = randomFact;
  }
}

function replacePictureElement(picture) {
  const baseURL = "https://raw.githubusercontent.com/datitran/raccoon_dataset/refs/heads/master/images/raccoon-";
  const randomImageNumber = Math.floor(Math.random() * 200) + 1;
  const newSrc = `${baseURL}${randomImageNumber}.jpg`;

  const randomFact = getRandomRaccoonFact();
  console.log(`Replacing <picture> with: ${newSrc} | Alt: ${randomFact}`);

  picture.querySelectorAll("source").forEach((source) => {
    source.srcset = newSrc;
  });

  const img = picture.querySelector("img");
  if (img) {
    replaceImageElement(img);
    img.alt = randomFact;
  }
}

// ----------------------------------------------------------------------
// 3. X.com-specific (Elon’s profile picture, tweet content, etc.)
// ----------------------------------------------------------------------
function replaceElonMuskProfileAndPosts() {
  // Wrap the DOM modifications so we disconnect the observer first
  safeModifyDOM(() => {
    // Replace profile pictures in tweets
    const tweets = document.querySelectorAll('article[data-testid="tweet"]');
    tweets.forEach((tweet) => {
      const userLink = tweet.querySelector('a[href*="/elonmusk"]');
      if (userLink) {
        replaceParentWithRaccoonImage(tweet);

        // Replace entire tweet text with a random fact
        const tweetTextContainer = tweet.querySelector('div[data-testid="tweetText"]');
        if (tweetTextContainer) {
          const randomFact = getRandomRaccoonFact();
          console.log(`Replacing Elon Musk's tweet text with: "${randomFact}"`);

          while (tweetTextContainer.firstChild) {
            tweetTextContainer.removeChild(tweetTextContainer.firstChild);
          }
          tweetTextContainer.textContent = randomFact;
        }

        // Remove retweet content, if any
        const retweetContent = tweet.querySelector('[aria-labelledby]');
        if (retweetContent) {
          console.log(`Removing retweet content: ${retweetContent.id}`);
          retweetContent.remove();
        }
      }
    });

    // Replace profile pictures in other areas
    const profileLinks = document.querySelectorAll('a[href*="/elonmusk"]');
    profileLinks.forEach((link) => {
      const parentElement = link.closest('div');
      if (parentElement) {
        replaceParentWithRaccoonImage(parentElement);
      }
    });
  });
}

function replaceParentWithRaccoonImage(element) {
  const img = element.querySelector('img[src*="pbs.twimg.com/profile_images"]');
  if (img) {
    const raccoonImg = document.createElement("img");
    raccoonImg.src = browser.runtime.getURL("twitter_pfp.png");
    raccoonImg.alt = "Raccoon Profile Picture";
    raccoonImg.style.width = img.clientWidth + "px";
    raccoonImg.style.height = img.clientHeight + "px";

    const parent = img.parentElement;
    if (parent) {
      parent.replaceWith(raccoonImg);
      console.log("Replaced Elon Musk's image container with a raccoon image.");
    }
  }
}

// ----------------------------------------------------------------------
// Listen for messages from popup (or background) to toggle on/off
// ----------------------------------------------------------------------
// In content.js
browser.runtime.onMessage.addListener((message) => {
  if (typeof message.filterEnabled === "boolean") {
    if (message.filterEnabled) {
      enableReplacements();
    } else {
      disableReplacements();
      // The background script will trigger a reload, 
      // so we don’t need to fully restore the original content.
    }
  }
});


// Finally, initialize the extension:
initializeExtension();
