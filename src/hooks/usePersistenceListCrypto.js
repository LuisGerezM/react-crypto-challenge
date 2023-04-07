import { cryptoAdapter } from "@/adapter/cryptoAdapter";
import { addCryptoList } from "@/redux/states/listCryptocurrency";
import { dictionary } from "@/schemas";
import { fetchAPI, URLs } from "@/services";
import { feedbackUser, orderArrayBy } from "@/utilities";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

export const usePersistenceListCrypto = () => {
  const [backUpCryptoList, setBackUpCryptoList] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = URLs.allCryptos;
        const fetching = await fetchAPI({ url });

        if (fetching.error) dispatch(addCryptoList(backUpCryptoList));
        else {
          const adaptedCryptos = orderArrayBy(
            fetching.map(crypto => cryptoAdapter(crypto)),
            "price"
          );

          setBackUpCryptoList(adaptedCryptos);
          dispatch(addCryptoList(adaptedCryptos));
        }
      } catch (error) {
        console.error("Error use persistence list crypto", error.message);
        feedbackUser({ icon: "error", title: dictionary("anErrorOcurred") });
      }
    };

    fetchData();

    const interval = setInterval(() => {
      fetchData();
    }, 225000);
    return () => {
      clearInterval(interval);
    };
  }, []);
};
