<template>
  <div class="cv">
    <Container>
      <Block :mt="7">
        <h1 class="h4">I'm currently working as a freelancer</h1>
        <p>
          I have experience with
          <em class="em">React</em>, <em class="em">Vue</em> and
          <em class="em">Node.js</em> and <em class="em">Web Components</em>.
          For design I use <em class="em">Figma</em> or
          <em class="em">Sketch</em>.
        </p>
        <p>
          Some of the clients I've worked with include
          <template v-for="(client, index) in clients">
            <span :key="client.link">
              <a :href="client.link" target="_blank" class="a">
                <em class="em">{{ client.name }}</em>
              </a>
              <span>{{ index + 1 === clients.length ? "." : ", " }}</span>
            </span>
          </template>
        </p>
      </Block>
      <Block :mt="6" :mb="7">
        <Block full :mb="4">
          <h2 class="h5">Work</h2>
        </Block>
        <ul class="cv-list">
          <li>
            <div>
              <h3 class="h5">Freelance developer</h3>
              <p>Myself</p>
            </div>
            <div>
              <span>2018 -</span>
              <span>&nbsp;Current</span>
            </div>
          </li>
          <li>
            <div>
              <h3 class="h5">Front end designer</h3>
              <a class="a">
                Netlife Design
                <Icon name="external-link" />
              </a>
            </div>
            <div>
              <span>2017 -</span>
              <span>&nbsp;2018</span>
            </div>
          </li>
          <li>
            <div>
              <h3 class="h5">Creative Technologist</h3>
              <a class="a">
                Empefire
                <Icon name="external-link" />
              </a>
            </div>
            <div>
              <span>2015 -</span>
              <span>&nbsp;2017</span>
            </div>
          </li>
          <li>
            <div>
              <h3 class="h5">Photo Journalist</h3>
              <a class="a">
                Aktiv i Oslo
                <Icon name="external-link" />
              </a>
            </div>
            <div>
              <span>2008 -</span>
              <span>&nbsp;2012</span>
            </div>
          </li>
        </ul>
      </Block>
      <Block :mt="6" :mb="7">
        <Block full :mb="4">
          <h2 class="h5">Education</h2>
        </Block>
        <ul class="cv-list">
          <li>
            <div>
              <h3 class="h5">Art Direction</h3>
              <a class="a">
                Westerdals Scool of Communcation
                <Icon name="external-link" />
              </a>
            </div>
            <div>
              <span>2012 -</span>
              <span>&nbsp;2015</span>
            </div>
          </li>
          <li>
            <div>
              <h3 class="h5">Media and Communcation</h3>
              <a class="a">
                Elvebakken VGS
                <Icon name="external-link" />
              </a>
            </div>
            <div>
              <span>2008 -</span>
              <span>&nbsp;2011</span>
            </div>
          </li>
        </ul>
      </Block>
    </Container>
  </div>
</template>

<script>
import Block from "@/components/Block";
import Container from "@/components/Container";
import Icon from "@/components/Icon";

export default {
  name: "home",
  components: { Block, Container, Icon },
  data() {
    return {
      clients: [
        { link: "https://www.obos.no", name: "OBOS" },
        { link: "https://www.posten.no", name: "Posten" },
        { link: "https://www.virke.no", name: "Virke" },
        { link: "https://www.xxl.no", name: "XXL" },
        { link: "https://www.gjensidige.no", name: "Gjensidige" },
        { link: "https://www.posten.no", name: "Posten" },
        { link: "https://www.power.no", name: "Power" },
        { link: "https://www.dfo.no", name: "Direktoratet for Økonomistyring" },
        {
          link: "https://www.imdi.no",
          name: "Integrerings- og mangfoldsdirektoratet"
        }
      ]
    };
  },
  created() {
    document.body.classList.remove("inverted");
  }
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
