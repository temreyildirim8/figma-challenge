<template>
  <div class="match-history">
    <div class="overlay"></div>
    <div class="main" v-if="history && history.analysis">
      <div class="container">
        <div class="title">
          <img src="../assets/images/bar-chart.png" />
          <h4>Your Latest Match Analysis</h4>
        </div>
        <div class="last-match">
          <div class="match-result victory" v-if="history.analysis[0].win">VICTORY</div>
          <div class="match-result defeat" v-if="!history.analysis[0].win">DEFEAT</div>
          <div class="analysis-content">
            <div class="analysis-title">
              <img src="../assets/images/top.svg" />
              <h4>{{history.analysis[0].summonerName}}</h4>
            </div>
            <div class="match-information">
              <div class="personal">
                <div class="spells-items-champion">
                  <div class="spells-champion">
                    <img class="champion" src="../assets/images/monster.png" />
                    <div class="spells">
                      <img src="../assets/images/magic1.png" />
                      <img src="../assets/images/magic2.png" />
                      <img src="../assets/images/magic3.png" />
                      <img src="../assets/images/magic4.png" />
                    </div>
                  </div>
                  <div class="items">
                    <img src="../assets/images/item3.png" />
                    <img src="../assets/images/item4.png" />
                    <img src="../assets/images/item3.png" />
                    <img src="../assets/images/item4.png" />
                    <img src="../assets/images/item5.png" />
                    <img src="../assets/images/item-empty.png" />
                    <img src="../assets/images/item4.png" />
                  </div>
                </div>
                <div class="analysis-information">
                  <p class="duration">
                    Duration:
                    <span>34:12</span>
                  </p>
                  <p class="ago">4 Hours Ago</p>
                  <p class="total">
                    <span>{{history.analysis[0].kills}}</span> /
                    <span>{{history.analysis[0].deaths}}</span> /
                    <span>{{history.analysis[0].assists}}</span>
                  </p>
                  <p class="kda">{{history.analysis[0].kda}}:1 KDA</p>
                  <p class="cs">{{history.analysis[0].cs}} CS</p>
                  <p class="kp">{{history.analysis[0].killParticipation}}% KP</p>
                </div>
                <div class="team-compare">
                  <div class="compare-item">
                    <div>
                      <p>{{history.analysis[0].teamSummary[0].summonerName}}</p>
                      <img class="friend pp" src="../assets/images/monster.png" />
                      <img class="lane" src="../assets/images/top.svg" />
                      <img class="enemy pp" src="../assets/images/monster.png" />
                      <p>{{history.analysis[0].teamSummary[5].summonerName}}</p>
                    </div>
                  </div>
                  <div class="compare-item">
                    <div>
                      <p>{{history.analysis[0].teamSummary[1].summonerName}}</p>
                      <img class="friend pp" src="../assets/images/monster.png" />
                      <img class="lane" src="../assets/images/top.svg" />
                      <img class="enemy pp" src="../assets/images/monster.png" />
                      <p>{{history.analysis[0].teamSummary[6].summonerName}}</p>
                    </div>
                  </div>
                  <div class="compare-item">
                    <div>
                      <p>{{history.analysis[0].teamSummary[2].summonerName}}</p>
                      <img class="friend pp" src="../assets/images/monster.png" />
                      <img class="lane" src="../assets/images/top.svg" />
                      <img class="enemy pp" src="../assets/images/monster.png" />
                      <p>{{history.analysis[0].teamSummary[7].summonerName}}</p>
                    </div>
                  </div>
                  <div class="compare-item">
                    <div>
                      <p>{{history.analysis[0].teamSummary[3].summonerName}}</p>
                      <img class="friend pp" src="../assets/images/monster.png" />
                      <img class="lane" src="../assets/images/top.svg" />
                      <img class="enemy pp" src="../assets/images/monster.png" />
                      <p>{{history.analysis[0].teamSummary[8].summonerName}}</p>
                    </div>
                  </div>
                  <div class="compare-item">
                    <div>
                      <p>Lor{{history.analysis[0].teamSummary[4].summonerName}}em</p>
                      <img class="friend pp" src="../assets/images/monster.png" />
                      <img class="lane" src="../assets/images/top.svg" />
                      <img class="enemy pp" src="../assets/images/monster.png" />
                      <p>{{history.analysis[0].teamSummary[9].summonerName}}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="actions">
              <p>
                Select Action
                <img src="../assets/images/chevron-down.png" />
              </p>
              <ul class="actions-menu">
                <li>2D REPLAY</li>
                <li>AI ANALYSIS</li>
                <li>PLAY LIKE A PRO</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="sort-menu">
          <div class="filter-menu">
            <p>
              <img src="../assets/images/filter.png" />
              Filter
            </p>
            <ul>
              <li v-on:click="filterData('all')">All</li>
              <li v-on:click="filterData('kda-asc')">KDA low to high</li>
              <li v-on:click="filterData('kda-desc')">KDA high to low</li>
              <li v-on:click="filterData('duration-asc')">Duration low to high</li>
              <li v-on:click="filterData('duration-desc')">Duration high to low</li>
              <li v-on:click="filterData('victory')">Victory</li>
              <li v-on:click="filterData('defeat')">Defeat</li>
            </ul>
          </div>
        </div>
        <div class="matches">
          <div
            v-for="item in matches"
            class="match-items"
            v-bind:class="{ victory: item.win, defeat: !item.win }"
            v-bind:key="item.key"
          >
            <div class="match-result victory" v-if="item.win">VICTORY</div>
            <div class="match-result defeat" v-if="!item.win">DEFEAT</div>
            <div class="match-item-information">
              <div class="time-information">
                <p>4 Hours Ago</p>
                <p>Ranked Solo</p>
                <p>34:06</p>
              </div>
              <div class="champion-spells">
                <div class="champion">
                  <img src="../assets/images/monster.png" />
                  <div class="level-badge">{{item.champLevel}}</div>
                </div>
                <div class="spells">
                  <img src="../assets/images/magic1.png" />
                  <img src="../assets/images/magic2.png" />
                  <img src="../assets/images/magic3.png" />
                  <img src="../assets/images/magic4.png" />
                </div>
                <div class="score">
                  <p>{{item.kills}} / {{item.deaths}} / {{item.assists}}</p>
                  <p>{{item.kda}}:1 KDA</p>
                </div>
                <div class="cs">
                  <p>{{item.cs}} CS</p>
                  <p>{{item.killParticipation}}% KP</p>
                </div>
                <div class="items">
                  <img src="../assets/images/item3.png" />
                  <img src="../assets/images/item4.png" />
                  <img src="../assets/images/item3.png" />
                  <img src="../assets/images/item4.png" />
                  <img src="../assets/images/item5.png" />
                  <img src="../assets/images/item-empty.png" />
                </div>
                <div class="teams">
                  <div class="team-1">
                    <img src="../assets/images/monster.png" />
                    <img src="../assets/images/monster.png" />
                    <img src="../assets/images/monster.png" />
                    <img src="../assets/images/monster.png" />
                    <img src="../assets/images/monster.png" />
                  </div>
                  <div class="team-2">
                    <img src="../assets/images/monster.png" />
                    <img src="../assets/images/monster.png" />
                    <img src="../assets/images/monster.png" />
                    <img src="../assets/images/monster.png" />
                    <img src="../assets/images/monster.png" />
                  </div>
                </div>
              </div>
              <div class="actions">
                <p>
                  Select Action
                  <img src="../assets/images/chevron-down.png" />
                </p>
                <ul class="actions-menu">
                  <li>2D REPLAY</li>
                  <li>AI ANALYSIS</li>
                  <li>PLAY LIKE A PRO</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "MatchHistory",
  data() {
    return{
      matches: []
    }
  },
  computed: {
    ...mapState(["history"])
  },
  async mounted() {
    await this.$store.dispatch("getHistory").then((res) => {
      this.matches = res.matches[0].results;
      // I can reach store state directly via mapGetters 
      // This declaration looks bad
    });
  },
  methods: {
    filterData: function(type) {
      let list = JSON.parse(JSON.stringify(this.history.matches[0].results));
      switch (type) {
        case "all":
          this.matches = list;
          break;
        case "kda-asc":
          this.matches = list.sort((a, b) => {return a.kda-b.kda});
          break;
        case "kda-desc":
          this.matches = list.sort((a, b) => {return b.kda-a.kda});
          break;
        case "duration-asc":
          this.matches = list.sort((a, b) => {return a.duration-b.duration});
          break;
        case "duration-desc":
          this.matches = list.sort((a, b) => {return b.duration-a.duration});
          break;
        case "victory":
          this.matches = list.filter(item => item.win === true);
          break;
        case "defeat":
          this.matches = list.filter(item => item.win === false);
          break;
        default:
          break;
      }
    }
  }
};
</script>

