import ClientWalletForm from "@/components/Form";
import {
  cleanup,
  render,
  renderHook,
  screen,
  waitFor
} from "@testing-library/react";
import { FormProvider, useForm } from "react-hook-form";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { mockOnClick } from "../../../.jest/mocks/onClickButton.mock";

const getUseFormMock = defaultValue =>
  renderHook(() =>
    useForm({
      defaultValues: {
        nameWallet: defaultValue?.nameWallet || ""
      }
    })
  );

jest.mock("@/components/ErrorsValidationForm/index.jsx", () => ({
  __esModule: true,
  default: () => (
    <div data-testid='ErrorsValidationForm'>ErrorsValidationForm</div>
  )
}));

describe("ClientWalletForm", () => {
  afterEach(cleanup);

  const mockStore = configureStore([]);

  const initialState = { clientsWallet: [] };
  const store = mockStore(initialState);

  const renderBy = defaultValue => {
    const { register, errors, handleSubmit } =
      getUseFormMock(defaultValue).result.current;

    return render(
      <Provider store={store}>
        <FormProvider {...{ register, errors, handleSubmit }}>
          <ClientWalletForm onSubmit={mockOnClick} cancelOperation={() => {}} />
        </FormProvider>
      </Provider>
    );
  };

  test("should two input and two buttons exists at screen", async () => {
    renderBy();
    const nameWalletInput = screen.getByLabelText(/Nombre de la cartera/i);
    const moneyAvaibleInput = screen.getByLabelText(/Cantidad de dinero/i);
    const submitButton = await screen.findByRole("button", {
      name: /Guardar/i
    });
    const cancelButton = await screen.findByRole("button", {
      name: /cancelar/i
    });

    expect(nameWalletInput).toBeInTheDocument();
    expect(moneyAvaibleInput).toBeInTheDocument();
    await waitFor(() => {
      expect(submitButton).toBeInTheDocument();
      expect(cancelButton).toBeInTheDocument();
    });

    expect(nameWalletInput).toHaveValue("");
    expect(moneyAvaibleInput).toHaveValue("");
  });

  test("should input 'nameWallet' contain defaultValue", async () => {
    renderBy({ nameWallet: "cliente8" });
    const nameWalletInput = await screen.findByRole("textbox", {
      name: /Nombre de la cartera/i
    });

    await waitFor(() => {
      expect(nameWalletInput).toHaveValue("cliente8");
    });
  });
});
