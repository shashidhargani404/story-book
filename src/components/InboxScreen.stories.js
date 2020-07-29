import React from "react";
import { ApolloProvider } from "@apollo/client";
import client from "../providers/ApolloClientProvider.js";

import { InboxScreen } from "./InboxScreen";
import { defaultTasksData } from "./TaskList.stories";
import { actionsData } from "./Task.stories";

export default {
  component: InboxScreen,
  title: "InboxScreen",
  decorators: [
    (story) => <ApolloProvider client={client}>{story()}</ApolloProvider>,
  ],
};

export const Default = () => (
  <InboxScreen tasks={[...defaultTasksData]} actionsData={actionsData} />
);

export const Error = () => <InboxScreen error="Something" />;
