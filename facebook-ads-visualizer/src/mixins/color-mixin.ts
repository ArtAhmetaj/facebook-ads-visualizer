import Vue from "vue";
import colors from "../scss/_variables.scss";

export default Vue.extend({
  data() {
    return new (class {
      colors: string[] = colors;
    })();
  },
});
