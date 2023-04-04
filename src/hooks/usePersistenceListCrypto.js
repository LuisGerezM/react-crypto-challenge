import { addCryptoList } from "@/redux/states/listCryptocurrency";
import { fetchAPI, URLs } from "@/services";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

export const usePersistenceListCrypto = () => {
  const [backUpCryptoList, setBackUpCryptoList] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      const url = URLs.allCryptos;
      const fetching = await fetchAPI({ url });

      if (fetching.error) dispatch(addCryptoList(backUpCryptoList));
      else {
        setBackUpCryptoList(fetching);
        dispatch(addCryptoList(fetching));
      }
    };

    fetchData();

    // const interval = setInterval(() => {
    //   console.log("Interval");
    //   fetchData();
    // }, 225000);
    return () => {
      // clearInterval(interval);
    };
  }, []);
};
