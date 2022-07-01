import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

export const useFetch = (url) => {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const fetchData = () => {
        fetch(url)
        .then((res) => res.json())
        .then((res) => {
            setData(res.items)
            setLoading(false)
        })
        .catch((err) => {
            setError(true)
            setLoading(false)
        })
    };

    useEffect(() => {
        fetchData()
    }, [url])

  return {
    data, loading, error
  }
}
