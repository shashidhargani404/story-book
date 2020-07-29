import React from "react";
import { ApolloProvider } from "@apollo/client";
import client from "./providers/ApolloClientProvider.js";
import InboxScreen from "./components/InboxScreen";
import { defaultTasksData } from "./components/TaskList.stories";
import { actionsData } from "./components/Task.stories";
import "./index.css";

function App() {
  return (
    <ApolloProvider client={client}>
      <InboxScreen tasks={[...defaultTasksData]} actionsData={actionsData} />
    </ApolloProvider>
  );
}
export default App;

// import React from "react";
// import { render } from "@testing-library/react";
// import App from "./App";

// test("renders learn react link", () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
