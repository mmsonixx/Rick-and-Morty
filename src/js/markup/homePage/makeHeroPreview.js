
import { episodesImages } from "../episodes/episodesImages.js";

export const makeHeroPreview = (item, type) => {
  let image = "";
  let link = "";

  if (type === "character") {
    image = item.image;
    link = `./characters.html?id=${item.id}`;
  } else {
    const match = item.episode?.match(/S(\d+)E\d+/i);
    const season = match ? Number(match[1]) : 1;

    image = episodesImages[season] || episodesImages[1];
    link = `./episodes.html?id=${item.id}`;
  }

  return `
    <div class="hero__preview">
      <img
        src="${image}"
        alt="${item.name}"
        class="hero__preview-img"
      />

      <div class="hero__preview-info">
        <span>${type === "character" ? "CHARACTER" : "EPISODE"}</span>

        <h2>${item.name}</h2>

        ${
          type === "character"
            ? `<p><span>Status:</span> ${item.status}</p>
               <p><span>Species:</span> ${item.species}</p>`
            : `<p>${item.episode}</p>
               <p>${item.air_date}</p>`
        }

        <a href="${link}">
          ${type === "character" ? "View character" : "View episode"}
        </a>
      </div>
    </div>
  `;
};
