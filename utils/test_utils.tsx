import React from "react";
import { render, RenderOptions } from "@testing-library/react";
import { Provider } from "react-redux";

// Import your store
import { store } from "@/app/store/store";

const Wrapper: React.FC = ({ children }: any) => (
  <Provider store={store}>{children}</Provider>
);

const renderWithProviders = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: Wrapper, ...options });

// re-export everything
export * from "@testing-library/react";
// override render method
export default renderWithProviders;
