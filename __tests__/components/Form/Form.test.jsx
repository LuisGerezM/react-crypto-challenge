import {
  render,
  screen,
  cleanup,
  renderHook,
  waitFor
} from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import ClientWalletForm from "@/components/Form";
import { FormProvider, useForm } from "react-hook-form";

const getUseFormMock = defaultValue =>
  renderHook(() =>
    useForm({
      defaultValues: {
        nameWallet: defaultValue?.nameWallet || ""
      }
    })
  );

describe("ClientWalletForm", () => {
  afterEach(cleanup);

  const mockStore = configureStore([]);

  const onSubmitMock = jest.fn();

  const initialState = { clientsWallet: [] };
  const store = mockStore(initialState);

  const renderBy = defaultValue => {
    const { register, errors, handleSubmit } =
      getUseFormMock(defaultValue).result.current;

    return render(
      <Provider store={store}>
        <FormProvider {...{ register, errors, handleSubmit }}>
          <ClientWalletForm
            onSubmit={onSubmitMock}
            cancelOperation={() => {}}
          />
        </FormProvider>
      </Provider>
    );
  };

  test("should two input exists at screen", () => {
    renderBy();

    const nameWalletInput = screen.getByLabelText(/Nombre de la cartera/i);
    const moneyAvaibleInput = screen.getByLabelText(/Cantidad de dinero/i);

    expect(nameWalletInput).toBeInTheDocument();
    expect(moneyAvaibleInput).toBeInTheDocument();

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

//     screen.debug();
