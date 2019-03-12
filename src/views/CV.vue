<template>
  <div class="cv">
    <Container>
      <Block :mt="7">
        <h1 class="h4">Cv</h1>
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
              <p>Netlife</p>
            </div>
            <div>
              <span>2018 -</span>
              <span>&nbsp;2019</span>
            </div>
          </li>
          <li>
            <div>
              <h3 class="h5">Creative Technologist</h3>
              <p>Empefire</p>
            </div>
            <div>
              <span>2018 -</span>
              <span>&nbsp;2019</span>
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
              <p>Westerdals Scool of Communcation</p>
            </div>
            <div>
              <span>2018 -</span>
              <span>&nbsp;2019</span>
            </div>
          </li>
          <li>
            <div>
              <h3 class="h5">Media and Communcation</h3>
              <p>Elvebakken VGS</p>
            </div>
            <div>
              <span>2018 -</span>
              <span>&nbsp;2019</span>
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

export default {
  name: "home",
  components: { Block, Container },
  created() {
    document.body.classList.add("inverted");
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

.cv-list li div:nth-child(1) {
  max-width: 650px;
  text-align: left;
}

.cv-list li div:nth-child(2) {
  min-width: 150px;
  text-align: right;
}
</style>
