import { useParams } from "@solidjs/router";
import { useNavigate } from 'solid-start';

import { onMount } from 'solid-js';

export default function Home() {
  const params = useParams();
  const navigate = useNavigate();

  onMount(() => {
    localStorage.setItem("index", params.id);
    window.dispatchEvent(new Event("storage"));
    navigate('/');
  });

  return 0;
}