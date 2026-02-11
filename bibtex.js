const BIBTEX = `@article{wu2025humanlm,
  title={HUMANLM: Simulating Users with State Alignment Beats Response Imitation},
  url={https://humanlm.stanford.edu/},
  author={Wu, Shirley and Choi, Evelyn and Khatua, Arpandeep and
          Wang, Zhanghan and He-Yueya, Joy and Weerasooriya, Tharindu Cyril and
          Wei, Wei and Yang, Diyi and Leskovec, Jure and Zou, James},
  year={2025}
}`;

function copyBibtex(el) {
    navigator.clipboard.writeText(BIBTEX).then(() => {
        const tooltip = el.querySelector('.tooltip');
        tooltip.classList.add('show');
        setTimeout(() => tooltip.classList.remove('show'), 1500);
    });
}
