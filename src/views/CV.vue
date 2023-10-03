<template>
  <div class="cv">
    <Container>
      <Block :mt="7">
        <Block full :mb="6">
          <h1 class="h1">I'm currently working as a freelancer</h1>
        </Block>
        <p>
          I have experience with both
          <em class="em">React</em> and <em class="em">Vue</em> for building
          applications with state management and business logic.
        </p>
        <p>
          I also enjoy building design libraries. At the moment I'm secretly in
          love with
          <em class="em">Web Components</em> for building long lasting
          cross-framework UI components. I also have some experience with
          <em class="em">Node.js</em> building stuff like
          <em class="em">CLI's</em>, <em class="em">GraphQL servers</em>, and
          connecting different <em class="em">Microservices</em>.
        </p>

        <p>
          When making design sketches and wireframes I usually use
          <em class="em">Figma</em> or <em class="em">Sketch</em>.
        </p>
        <p>
          Some of the clients I've worked with include
          <template v-for="(client, index) in clients">
            <span :key="client.link">
              <a :href="client.link" target="_blank" class="a underline">
                <em class="em">{{ client.name }}</em>
              </a>
              <span>{{ index + 1 === clients.length ? "." : ", " }}</span>
            </span>
          </template>
        </p>
      </Block>
      <Block :mt="6" :mb="7">
        <Block full :mb="4">
          <h2 class="h5">Notable projects</h2>
        </Block>
        <ul class="cv-list">
          <li v-for="(project, index) in projects" :key="index">
            <div>
              <h3 class="h5">{{ project.client }}</h3>
              <a
                v-if="project.link"
                class="a"
                :href="project.link"
                target="_blank"
              >
                {{ project.type }}
                <Icon name="external-link" />
              </a>
              <p v-else>{{ project.type }}</p>
            </div>
            <div>
              <span>{{ project.year }}</span>
            </div>
          </li>
        </ul>
      </Block>
      <Block :mt="6" :mb="7">
        <Block full :mb="4">
          <h2 class="h5">Work</h2>
        </Block>
        <ul class="cv-list">
          <li v-for="(workPlace, index) in workPlaces" :key="index">
            <div>
              <h3 class="h5">{{ workPlace.type }}</h3>
              <a
                v-if="workPlace.link"
                class="a"
                :href="workPlace.link"
                target="_blank"
              >
                {{ workPlace.name }}
                <Icon name="external-link" />
              </a>
              <p v-else>{{ workPlace.name }}</p>
            </div>
            <div>
              <span>{{ workPlace.from }} -</span>
              <span>&nbsp;{{ workPlace.to }}</span>
            </div>
          </li>
        </ul>
      </Block>
      <Block :mt="6" :mb="7">
        <Block full :mb="4">
          <h2 class="h5">Education</h2>
        </Block>
        <ul class="cv-list">
          <li v-for="(school, index) in schools" :key="index">
            <div>
              <h3 class="h5">{{ school.type }}</h3>
              <a class="a" :href="school.link" target="_blank">
                {{ school.name }}
                <Icon name="external-link" />
              </a>
            </div>
            <div>
              <span>{{ school.from }} -</span>
              <span>&nbsp;{{ school.to }}</span>
            </div>
          </li>
        </ul>
      </Block>
    </Container>
  </div>
</template>

<script>
import anime from "animejs";
import Block from "@/components/Block";
import Container from "@/components/Container";
import Icon from "@/components/Icon";

export default {
  name: "home",
  components: { Block, Container, Icon },
  data() {
    return {
      projects: [
        {
          client: "Flux",
          type: "Software engineering",
          year: "2023",
          link: "https://fluxsocial.io/",
        },
        {
          client: "Psynapse.no",
          type: "Web site development",
          year: "2021",
          link: "https://psynapse.netlify.app/",
        },
        {
          client: "Psynapse.no",
          type: "Web site development",
          year: "2021",
          link: "https://psynapse.netlify.app/",
        },
        {
          client: "Core Elements",
          type: "Open Source Design system",
          year: "2020",
          link: "https://core-elements.netlify.app/",
        },
        {
          client: "Aprila Bank",
          type: "Design system",
          year: "2019",
          link: "https://aprilabank-storybook.netlify.app/",
        },
        {
          client: "Posten",
          type: "Design system",
          year: "2018",
          link: "https://github.com/bring/hedwig",
        },
      ],
      workPlaces: [
        {
          name: "Self Employed",
          type: "Senior Frontend Developer",
          from: "2008",
          to: "Now",
          link: "",
        },
        {
          name: "ADAM Layer",
          type: "Frontend lead",
          from: "2023",
          to: "Now",
          link: "https://ad4m.dev/",
        },
        {
          name: "Flux",
          type: "Frontend lead",
          from: "2021",
          to: "Now",
          link: "https://fluxsocial.io/",
        },
        {
          name: "Netlife Design",
          type: "Front end designer",
          from: "2017",
          to: "2018",
          link: "https://netlife.com/",
        },
        {
          name: "Empefire",
          type: "Creative Technologist",
          from: "2015",
          to: "2017",
          link: "https://en-gb.facebook.com/empefire/",
        },
        {
          name: "Aktiv i Oslo",
          type: "Photo Journalist",
          from: "2008",
          to: "2012",
          link: "https://www.aktivioslo.no/",
        },
      ],
      schools: [
        {
          name: "Westerdals School of Communication",
          type: "Art Direction",
          from: "2012",
          to: "2015",
          link: "https://www.westerdals.no/en/programme/art-direction/",
        },
        {
          name: "Elvebakken VGS",
          type: "Media & Communication",
          from: "2008",
          to: "2011",
          link:
            "https://elvebakken.vgs.no/fagtilbud/kreativ-avdeling/medier-og-kommunikasjon/",
        },
      ],
      clients: [
        { link: "https://www.aprila.no", name: "Aprila" },
        { link: "https://www.obos.no", name: "OBOS" },
        { link: "https://www.posten.no", name: "Posten" },
        { link: "https://www.virke.no", name: "Virke" },
        { link: "https://www.xxl.no", name: "XXL" },
        { link: "https://www.gjensidige.no", name: "Gjensidige" },
        { link: "https://www.power.no", name: "Power" },
        { link: "https://www.dfo.no", name: "Direktoratet for Økonomistyring" },
        {
          link: "https://www.imdi.no",
          name: "Integrerings- og mangfoldsdirektoratet",
        },
      ],
    };
  },
  created() {
    document.body.classList.remove("inverted");
  },
  mounted() {
    var textWrapper = document.querySelector(".h1");
    textWrapper.innerHTML = textWrapper.textContent.replace(
      /[^\s]+/g,
      "<span class='letter' style='display: inline-block'>$&</span>"
    );

    anime({
      targets: ".h1 .letter",
      opacity: [0, 1],
      translateY: [10, 0],
      duration: 1000,
      delay: anime.stagger(60),
    });
  },
};
</script>

<style>
.cv-list {
  list-style: none;
  padding: 0;
  margin: 0;
  max-width: 600px;
  font-size: 0.8em;
}

.cv-list p {
  padding: 0;
  margin: 0;
}

.cv-list li {
  border-bottom: 1px solid var(--color-light);
  padding-bottom: var(--space-3);
  padding-top: var(--space-3);
  display: flex;
  justify-content: space-between;
}

.cv-list h3 {
  margin-bottom: var(--space-2);
}

.cv-list li div:nth-child(1) {
  max-width: 650px;
  text-align: left;
}

.cv-list li div:nth-child(2) {
  min-width: 150px;
  text-align: right;
}
</style>
