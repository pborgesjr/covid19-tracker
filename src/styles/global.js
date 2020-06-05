import { createGlobalStyle } from 'styled-components';

import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`

	* {
		margin: 0;
		padding: 0;
		outline: 0;
		box-sizing: border-box;
	}
	*:focus {
		outline: 0;
	}
	html, body, #root {
    background: #101010;
	}
	body {
		-webkit-font-smoothing: antialiased;
	}
	body, input, button {
		font: 18px 'Rationale', sans-serif;
  }

	a {
		text-decoration: none;
	}
	ul {
		list-style: none;
	}
	button {
		cursor: pointer;
	}
`;
