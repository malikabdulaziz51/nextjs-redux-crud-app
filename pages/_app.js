import Layout from "./components/Layout";
import "../css/style.css";
import "semantic-ui-css/semantic.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import withRedux from "next-redux-wrapper";
import store from "../redux/store";

console.log(store);
function MyApp({ Component, pageProps }) {
	return (
		<Provider store={store}>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</Provider>
	);
}

const makeStore = () => store;

export default withRedux(makeStore)(MyApp);
