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
    "Raccoons' scientific name is Procyon lotor, which loosely translates to 'washing bear.'",
    "Raccoons have been observed manipulating complex latches, even opening windows or pet doors.",
    "Raccoons show remarkable curiosity, often spending considerable time investigating unfamiliar objects.",
    "The name 'raccoon' is believed to come from an Algonquin term meaning 'he scratches with his hands.'",
    "In certain areas, raccoons may form temporary foraging groups when food is abundant.",
    "Coastal raccoons sometimes rely heavily on marine food sources, such as crabs and clams.",
    "Raccoons' whiskers are highly sensitive, helping them navigate in tight or dark places.",
    "In some regions, raccoons help control rodent and insect populations by preying on them.",
    "Raccoons can briefly stand upright on their hind legs to reach higher objects or food.",
    "Common den sites for raccoons include hollow logs, abandoned burrows, or attic spaces in human structures.",
    "Raccoons' native range extends from southern Canada to parts of Central America, although introduced populations exist elsewhere.",
    "Raccoons use facial expressions and ear movements to signal mood and alertness to other raccoons.",
    "Urban raccoons may have smaller home ranges, thanks to abundant trash and pet food.",
    "Raccoons are frequent subjects of scientific studies on mammalian cognition due to their problem-solving abilities.",
    "Raccoons' eyes reflect light intensely at night, creating a bright 'glow' under headlights.",
    "Compared to some similar-sized mammals, raccoons have a relatively high metabolic rate.",
    "Young raccoons typically start venturing outside the den at about 8 to 10 weeks old.",
    "While primarily nocturnal, raccoons may forage during the day if food sources are limited.",
    "Raccoons can adjust their territory size depending on the availability of resources.",
    "Raccoons' hearing is quite acute, aiding in detecting predators and other raccoons.",
    "Certain raccoons have quirky habits like flipping rocks or rummaging through pockets for treats.",
    "Raccoons' underfur provides insulation while the outer guard hairs help repel water.",
    "By eating fruit and later depositing seeds, raccoons assist in dispersing plant species.",
    "Raccoons often appear as main characters in children’s books and cartoons.",
    "Rare anecdotal reports exist of raccoons briefly riding on alligators in Florida marshes.",
    "The ring patterns on raccoons' tails may fade or become irregular with age or environmental factors.",
    "Raccoons can remember specific foraging spots across seasons, adjusting travel routes accordingly.",
    "When cornered, raccoons may hiss and bare their teeth but generally prefer escape over confrontation.",
    "Some studies indicate raccoons can produce over 50 distinct vocalizations.",
    "If food and den sites are plentiful, raccoon populations can grow rapidly.",
    "Raccoons sometimes groom each other during social encounters, though this is uncommon.",
    "In captivity, raccoons have opened puzzle boxes originally designed for primates.",
    "Strong swimming skills allow raccoons to cross rivers or lakes in search of food.",
    "Raccoons' breeding typically occurs in late winter, but timing can vary based on climate.",
    "Raccoons have been known to climb onto roofs to reach bird feeders and pet food dishes.",
    "Though relatively rare, raccoons can carry rabies; some are vaccinated in rehab centers.",
    "Raccoons can perceive some colors, but their night vision is more tuned to contrast detection.",
    "Raccoons sometimes create temporary 'day beds' in thick brush or dense vegetation.",
    "The density of sensory receptors in raccoons' forepaws is comparable to that of some primates.",
    "Raccoons may mark territory with urine or scent gland secretions.",
    "In parts of the southwestern United States, raccoons have been seen opportunistically following larger predators in hopes of scavenging.",
    "Rather than excavating new dens, raccoons often repurpose natural cavities or abandoned burrows.",
    "Raccoons' front paws are so sensitive that they can discern textures and shapes even in low light."
  ];


function getRandomRaccoonFact() {
  const index = Math.floor(Math.random() * raccoonFacts.length);
  return raccoonFacts[index];
}

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

  runReplacements();

  if (observer) {
    observer.disconnect();
  }

  observer = new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.addedNodes && mutation.addedNodes.length > 0) {
        runReplacements();
        break;
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

/**
 * Replace text referencing "elon", "musk", etc. with a random fact 
 */
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

  const parentElement = node.parentElement;
  if (parentElement) {
    const nearbyImage = parentElement.querySelector("img");
    if (nearbyImage) {
      replaceImageElement(nearbyImage);
    }
  }
}

/**
 * Replace images containing Musk/Tesla/SpaceX references
 */
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

  const pictures = document.querySelectorAll("picture");
  pictures.forEach((picture) => {
    const img = picture.querySelector("img");
    if (img) {
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
        replacePictureElement(picture);
      }
    }
  });
}

function replaceImageElement(img) {
  const baseURL = "https://raw.githubusercontent.com/datitran/raccoon_dataset/refs/heads/master/images/raccoon-";
  const randomImageNumber = Math.floor(Math.random() * 200) + 1;
  const newSrc = `${baseURL}${randomImageNumber}.jpg`;

  const randomFact = getRandomRaccoonFact();
  console.log(`Replacing image: ${img.src} -> ${newSrc} | Alt: ${randomFact}`);

  img.src = newSrc;
  img.srcset = "";
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

/**
 * X.com-specific
 */
function replaceElonMuskProfileAndPosts() {
  safeModifyDOM(() => {
    const tweets = document.querySelectorAll('article[data-testid="tweet"]');
    tweets.forEach((tweet) => {
      const userLink = tweet.querySelector('a[href*="/elonmusk"]');
      if (userLink) {
        replaceParentWithRaccoonImage(tweet);

        const tweetTextContainer = tweet.querySelector('div[data-testid="tweetText"]');
        if (tweetTextContainer) {
          const randomFact = getRandomRaccoonFact();
          console.log(`Replacing Elon Musk's tweet text with: "${randomFact}"`);

          while (tweetTextContainer.firstChild) {
            tweetTextContainer.removeChild(tweetTextContainer.firstChild);
          }
          tweetTextContainer.textContent = randomFact;
        }

        const retweetContent = tweet.querySelector('[aria-labelledby]');
        if (retweetContent) {
          console.log(`Removing retweet content: ${retweetContent.id}`);
          retweetContent.remove();
        }
      }
    });

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

/**
 * Listen for messages from popup (or background) to toggle on/off
 */
browser.runtime.onMessage.addListener((message) => {
  if (typeof message.filterEnabled === "boolean") {
    if (message.filterEnabled) {
      enableReplacements();
    } else {
      disableReplacements();
      location.reload();
    }
  }
});

initializeExtension();