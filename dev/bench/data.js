window.BENCHMARK_DATA = {
  "lastUpdate": 1720018259684,
  "repoUrl": "https://github.com/GiadaLalli/ISN-tractor",
  "entries": {
    "ISN-Tractor Performance Regression Tests": [
      {
        "commit": {
          "author": {
            "email": "james.collier@vib.be",
            "name": "James Collier",
            "username": "MaybeJustJames"
          },
          "committer": {
            "email": "james.collier@vib.be",
            "name": "James Collier",
            "username": "MaybeJustJames"
          },
          "distinct": true,
          "id": "9fa30a6fa0897913aa679ed6c5fe13347ca39fe8",
          "message": "Fix typo: branch name in benchmark action",
          "timestamp": "2024-07-03T10:20:16+02:00",
          "tree_id": "1c90aa8c27e22d15eaf062b74a3e5dd482e63d08",
          "url": "https://github.com/GiadaLalli/ISN-tractor/commit/9fa30a6fa0897913aa679ed6c5fe13347ca39fe8"
        },
        "date": 1719995035945,
        "tool": "pytest",
        "benches": [
          {
            "name": "test/test_benchmark.py::test_sparse_200_500_cpu",
            "value": 9.761383356556399,
            "unit": "iter/sec",
            "range": "stddev: 0.03923988651684272",
            "extra": "mean: 102.44449618181761 msec\nrounds: 11"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "26444312+MaybeJustJames@users.noreply.github.com",
            "name": "James Collier",
            "username": "MaybeJustJames"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "037b40fca5898fe1e72550dfbff64314669902f9",
          "message": "Biweight midcorrelation metric (#45)\n\n* Add a new metric: biweight_midcorrelation, selected with a `metric=\"biweight\"` argument.\r\n* Improve overall sparse_isn performance\r\n* Output a diff in CI when formatting check fails\r\n* Add performance regression benchmarks and publish results to GHPages\r\n* Allow importing the benchmark module without needing pyperf\r\n* Update dependencies",
          "timestamp": "2024-07-03T20:40:11+10:00",
          "tree_id": "fe25cb6bfe984eee04cce041b6fe4272c2794269",
          "url": "https://github.com/GiadaLalli/ISN-tractor/commit/037b40fca5898fe1e72550dfbff64314669902f9"
        },
        "date": 1720003669175,
        "tool": "pytest",
        "benches": [
          {
            "name": "test/test_benchmark.py::test_regression_biweight_max",
            "value": 4.393226393331528,
            "unit": "iter/sec",
            "range": "stddev: 0.004418668595763448",
            "extra": "mean: 227.62314310000022 msec\nrounds: 20"
          },
          {
            "name": "test/test_benchmark.py::test_regression_biweight_avg",
            "value": 4.20138945101727,
            "unit": "iter/sec",
            "range": "stddev: 0.0027047264281485923",
            "extra": "mean: 238.01649708000127 msec\nrounds: 20"
          },
          {
            "name": "test/test_benchmark.py::test_regression_biweight_none",
            "value": 3.338919716750856,
            "unit": "iter/sec",
            "range": "stddev: 0.006332069546209397",
            "extra": "mean: 299.49806668999884 msec\nrounds: 20"
          },
          {
            "name": "test/test_benchmark.py::test_regression_pearson_max",
            "value": 4.323765338966582,
            "unit": "iter/sec",
            "range": "stddev: 0.006613121351422823",
            "extra": "mean: 231.27989647999925 msec\nrounds: 20"
          },
          {
            "name": "test/test_benchmark.py::test_regression_pearson_avg",
            "value": 4.127114417326587,
            "unit": "iter/sec",
            "range": "stddev: 0.006609806704488093",
            "extra": "mean: 242.30004280999992 msec\nrounds: 20"
          },
          {
            "name": "test/test_benchmark.py::test_regression_pearson_none",
            "value": 4.536818089234067,
            "unit": "iter/sec",
            "range": "stddev: 0.004476792928489834",
            "extra": "mean: 220.41880021000054 msec\nrounds: 20"
          },
          {
            "name": "test/test_benchmark.py::test_regression_spearman_max",
            "value": 2.1454880630266198,
            "unit": "iter/sec",
            "range": "stddev: 0.006889542631884683",
            "extra": "mean: 466.09441330999965 msec\nrounds: 20"
          },
          {
            "name": "test/test_benchmark.py::test_regression_spearman_avg",
            "value": 2.069177938891619,
            "unit": "iter/sec",
            "range": "stddev: 0.007531704574690288",
            "extra": "mean: 483.28371436999873 msec\nrounds: 20"
          },
          {
            "name": "test/test_benchmark.py::test_regression_spearman_none",
            "value": 2.1544928697939136,
            "unit": "iter/sec",
            "range": "stddev: 0.007481205082755242",
            "extra": "mean: 464.14634924999973 msec\nrounds: 20"
          },
          {
            "name": "test/test_benchmark.py::test_regression_dot_max",
            "value": 7.919952053021951,
            "unit": "iter/sec",
            "range": "stddev: 0.006420012830145444",
            "extra": "mean: 126.26339065000252 msec\nrounds: 20"
          },
          {
            "name": "test/test_benchmark.py::test_regression_dot_avg",
            "value": 7.003241421788938,
            "unit": "iter/sec",
            "range": "stddev: 0.006602040105543409",
            "extra": "mean: 142.79102200999887 msec\nrounds: 20"
          },
          {
            "name": "test/test_benchmark.py::test_regression_dot_none",
            "value": 8.302817812667318,
            "unit": "iter/sec",
            "range": "stddev: 0.006882387217356924",
            "extra": "mean: 120.44103851999921 msec\nrounds: 20"
          },
          {
            "name": "test/test_benchmark.py::test_regression_dense",
            "value": 184.17386737978973,
            "unit": "iter/sec",
            "range": "stddev: 0.00028692731512896315",
            "extra": "mean: 5.429651960002957 msec\nrounds: 20"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "45395344+GiadaLalli@users.noreply.github.com",
            "name": "Giada Lalli",
            "username": "GiadaLalli"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7396aae60c352a32831be38210f4c2022c525704",
          "message": "Update test_benchmark.py",
          "timestamp": "2024-07-03T15:03:24+02:00",
          "tree_id": "587d6e1335b74119917eda6cce98356bb41e6dad",
          "url": "https://github.com/GiadaLalli/ISN-tractor/commit/7396aae60c352a32831be38210f4c2022c525704"
        },
        "date": 1720012302988,
        "tool": "pytest",
        "benches": [
          {
            "name": "test/test_benchmark.py::test_regression_biweight_max",
            "value": 3.819690394826236,
            "unit": "iter/sec",
            "range": "stddev: 0.007719676694786033",
            "extra": "mean: 261.8013233099987 msec\nrounds: 20"
          },
          {
            "name": "test/test_benchmark.py::test_regression_biweight_avg",
            "value": 3.682715682248524,
            "unit": "iter/sec",
            "range": "stddev: 0.006661025822330924",
            "extra": "mean: 271.5387464799994 msec\nrounds: 20"
          },
          {
            "name": "test/test_benchmark.py::test_regression_biweight_none",
            "value": 2.90129266283391,
            "unit": "iter/sec",
            "range": "stddev: 0.01095701492511262",
            "extra": "mean: 344.6739492400002 msec\nrounds: 20"
          },
          {
            "name": "test/test_benchmark.py::test_regression_pearson_max",
            "value": 3.7450767124166546,
            "unit": "iter/sec",
            "range": "stddev: 0.010181271580967625",
            "extra": "mean: 267.0172273600002 msec\nrounds: 20"
          },
          {
            "name": "test/test_benchmark.py::test_regression_pearson_avg",
            "value": 3.560223940179243,
            "unit": "iter/sec",
            "range": "stddev: 0.007978098472022317",
            "extra": "mean: 280.88120770000046 msec\nrounds: 20"
          },
          {
            "name": "test/test_benchmark.py::test_regression_pearson_none",
            "value": 3.787115841976578,
            "unit": "iter/sec",
            "range": "stddev: 0.008533196289151617",
            "extra": "mean: 264.05318498999975 msec\nrounds: 20"
          },
          {
            "name": "test/test_benchmark.py::test_regression_spearman_max",
            "value": 1.8577263996840268,
            "unit": "iter/sec",
            "range": "stddev: 0.011572399497934234",
            "extra": "mean: 538.2923987999988 msec\nrounds: 20"
          },
          {
            "name": "test/test_benchmark.py::test_regression_spearman_avg",
            "value": 1.7883281640879818,
            "unit": "iter/sec",
            "range": "stddev: 0.009099928113447089",
            "extra": "mean: 559.181485859998 msec\nrounds: 20"
          },
          {
            "name": "test/test_benchmark.py::test_regression_spearman_none",
            "value": 1.8651347197177237,
            "unit": "iter/sec",
            "range": "stddev: 0.0108709487577585",
            "extra": "mean: 536.1542999700008 msec\nrounds: 20"
          },
          {
            "name": "test/test_benchmark.py::test_regression_dot_max",
            "value": 6.707425077438191,
            "unit": "iter/sec",
            "range": "stddev: 0.008699993400617115",
            "extra": "mean: 149.08850839999786 msec\nrounds: 20"
          },
          {
            "name": "test/test_benchmark.py::test_regression_dot_avg",
            "value": 5.9614291986183705,
            "unit": "iter/sec",
            "range": "stddev: 0.007539461241186057",
            "extra": "mean: 167.74500990999968 msec\nrounds: 20"
          },
          {
            "name": "test/test_benchmark.py::test_regression_dot_none",
            "value": 7.1650701541419375,
            "unit": "iter/sec",
            "range": "stddev: 0.007704052858527071",
            "extra": "mean: 139.56597471999999 msec\nrounds: 20"
          },
          {
            "name": "test/test_benchmark.py::test_regression_dense",
            "value": 179.7773264012365,
            "unit": "iter/sec",
            "range": "stddev: 0.00030883554857554424",
            "extra": "mean: 5.562436710000611 msec\nrounds: 20"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "45395344+GiadaLalli@users.noreply.github.com",
            "name": "Giada Lalli",
            "username": "GiadaLalli"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "34f868df71e63574060b4d6fb7b13ccc6f241962",
          "message": "Update dense_isn_offline.py",
          "timestamp": "2024-07-03T15:01:55+02:00",
          "tree_id": "a282d8f1f88b62091ffaac04b7d3825c4f323c68",
          "url": "https://github.com/GiadaLalli/ISN-tractor/commit/34f868df71e63574060b4d6fb7b13ccc6f241962"
        },
        "date": 1720012634182,
        "tool": "pytest",
        "benches": [
          {
            "name": "test/test_benchmark.py::test_regression_biweight_max",
            "value": 3.957638322425007,
            "unit": "iter/sec",
            "range": "stddev: 0.005460325613886096",
            "extra": "mean: 252.67594422000116 msec\nrounds: 20"
          },
          {
            "name": "test/test_benchmark.py::test_regression_biweight_avg",
            "value": 3.758674961343103,
            "unit": "iter/sec",
            "range": "stddev: 0.004219428490296368",
            "extra": "mean: 266.05120428999953 msec\nrounds: 20"
          },
          {
            "name": "test/test_benchmark.py::test_regression_biweight_none",
            "value": 2.9395570542551424,
            "unit": "iter/sec",
            "range": "stddev: 0.014834080048365249",
            "extra": "mean: 340.1873076599941 msec\nrounds: 20"
          },
          {
            "name": "test/test_benchmark.py::test_regression_pearson_max",
            "value": 3.7809436531368963,
            "unit": "iter/sec",
            "range": "stddev: 0.009397519751538977",
            "extra": "mean: 264.4842377300017 msec\nrounds: 20"
          },
          {
            "name": "test/test_benchmark.py::test_regression_pearson_avg",
            "value": 3.6689491698673935,
            "unit": "iter/sec",
            "range": "stddev: 0.008152412268041835",
            "extra": "mean: 272.5576053800012 msec\nrounds: 20"
          },
          {
            "name": "test/test_benchmark.py::test_regression_pearson_none",
            "value": 3.9593094260269437,
            "unit": "iter/sec",
            "range": "stddev: 0.008643702831403963",
            "extra": "mean: 252.56929741999784 msec\nrounds: 20"
          },
          {
            "name": "test/test_benchmark.py::test_regression_spearman_max",
            "value": 1.9035310296408092,
            "unit": "iter/sec",
            "range": "stddev: 0.011606886416724768",
            "extra": "mean: 525.3394793299992 msec\nrounds: 20"
          },
          {
            "name": "test/test_benchmark.py::test_regression_spearman_avg",
            "value": 1.8298270646529189,
            "unit": "iter/sec",
            "range": "stddev: 0.008246111058467094",
            "extra": "mean: 546.4997317599955 msec\nrounds: 20"
          },
          {
            "name": "test/test_benchmark.py::test_regression_spearman_none",
            "value": 1.9328540711813105,
            "unit": "iter/sec",
            "range": "stddev: 0.011822773852717667",
            "extra": "mean: 517.3696322500052 msec\nrounds: 20"
          },
          {
            "name": "test/test_benchmark.py::test_regression_dot_max",
            "value": 6.671303614506522,
            "unit": "iter/sec",
            "range": "stddev: 0.007881040850766",
            "extra": "mean: 149.8957411900028 msec\nrounds: 20"
          },
          {
            "name": "test/test_benchmark.py::test_regression_dot_avg",
            "value": 5.86616526537297,
            "unit": "iter/sec",
            "range": "stddev: 0.00854960667068648",
            "extra": "mean: 170.46911479000414 msec\nrounds: 20"
          },
          {
            "name": "test/test_benchmark.py::test_regression_dot_none",
            "value": 7.191945247322371,
            "unit": "iter/sec",
            "range": "stddev: 0.00788203748025946",
            "extra": "mean: 139.0444400800061 msec\nrounds: 20"
          },
          {
            "name": "test/test_benchmark.py::test_regression_dense",
            "value": 160.46313589164535,
            "unit": "iter/sec",
            "range": "stddev: 0.0032716962366649014",
            "extra": "mean: 6.231960969996635 msec\nrounds: 20"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "26444312+MaybeJustJames@users.noreply.github.com",
            "name": "James Collier",
            "username": "MaybeJustJames"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d50d0165f1a5bc5810893d414c036a3a69d3df86",
          "message": "Improve metric performance by not executing Python (#46)",
          "timestamp": "2024-07-03T23:44:49+10:00",
          "tree_id": "cdc6b0c5cd02a0248b1463529824f17f788d403b",
          "url": "https://github.com/GiadaLalli/ISN-tractor/commit/d50d0165f1a5bc5810893d414c036a3a69d3df86"
        },
        "date": 1720014841666,
        "tool": "pytest",
        "benches": [
          {
            "name": "test/test_benchmark.py::test_regression_biweight_max",
            "value": 3.1406874757178094,
            "unit": "iter/sec",
            "range": "stddev: 0.006028185959351623",
            "extra": "mean: 318.4016263100003 msec\nrounds: 20"
          },
          {
            "name": "test/test_benchmark.py::test_regression_biweight_avg",
            "value": 3.0237937476206365,
            "unit": "iter/sec",
            "range": "stddev: 0.00524355887474047",
            "extra": "mean: 330.710386840002 msec\nrounds: 20"
          },
          {
            "name": "test/test_benchmark.py::test_regression_biweight_none",
            "value": 2.49944904857075,
            "unit": "iter/sec",
            "range": "stddev: 0.0069669016053015",
            "extra": "mean: 400.08817166000085 msec\nrounds: 20"
          },
          {
            "name": "test/test_benchmark.py::test_regression_pearson_max",
            "value": 3.172154911082174,
            "unit": "iter/sec",
            "range": "stddev: 0.005351087487189409",
            "extra": "mean: 315.24311644000136 msec\nrounds: 20"
          },
          {
            "name": "test/test_benchmark.py::test_regression_pearson_avg",
            "value": 3.064216078606707,
            "unit": "iter/sec",
            "range": "stddev: 0.0034749593990289246",
            "extra": "mean: 326.3477425700012 msec\nrounds: 20"
          },
          {
            "name": "test/test_benchmark.py::test_regression_pearson_none",
            "value": 3.1776767530869066,
            "unit": "iter/sec",
            "range": "stddev: 0.009072871778033446",
            "extra": "mean: 314.6953191600011 msec\nrounds: 20"
          },
          {
            "name": "test/test_benchmark.py::test_regression_spearman_max",
            "value": 1.77770372290717,
            "unit": "iter/sec",
            "range": "stddev: 0.009830450843263498",
            "extra": "mean: 562.5234324000002 msec\nrounds: 20"
          },
          {
            "name": "test/test_benchmark.py::test_regression_spearman_avg",
            "value": 1.7397474219247275,
            "unit": "iter/sec",
            "range": "stddev: 0.008763806181757892",
            "extra": "mean: 574.7960809700032 msec\nrounds: 20"
          },
          {
            "name": "test/test_benchmark.py::test_regression_spearman_none",
            "value": 1.7661220106349467,
            "unit": "iter/sec",
            "range": "stddev: 0.011228879107502714",
            "extra": "mean: 566.2122967599987 msec\nrounds: 20"
          },
          {
            "name": "test/test_benchmark.py::test_regression_dot_max",
            "value": 4.581720870228785,
            "unit": "iter/sec",
            "range": "stddev: 0.01012056865846842",
            "extra": "mean: 218.25860376999913 msec\nrounds: 20"
          },
          {
            "name": "test/test_benchmark.py::test_regression_dot_avg",
            "value": 4.241784752034799,
            "unit": "iter/sec",
            "range": "stddev: 0.008494608816920653",
            "extra": "mean: 235.74982193999745 msec\nrounds: 20"
          },
          {
            "name": "test/test_benchmark.py::test_regression_dot_none",
            "value": 4.527550919929089,
            "unit": "iter/sec",
            "range": "stddev: 0.00826953588541545",
            "extra": "mean: 220.86996207999846 msec\nrounds: 20"
          },
          {
            "name": "test/test_benchmark.py::test_regression_dense",
            "value": 163.57625724317919,
            "unit": "iter/sec",
            "range": "stddev: 0.0004801291384276231",
            "extra": "mean: 6.113356650001833 msec\nrounds: 20"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "james.collier@vib.be",
            "name": "James Collier",
            "username": "MaybeJustJames"
          },
          "committer": {
            "email": "james.collier@vib.be",
            "name": "James Collier",
            "username": "MaybeJustJames"
          },
          "distinct": true,
          "id": "9f840a9ade61247dbbd7e2368c18d607d4ff0e44",
          "message": "Link to performance history plots from the README",
          "timestamp": "2024-07-03T15:47:05+02:00",
          "tree_id": "f9371040b50489b772d2b1bfa99266f7a4354c2a",
          "url": "https://github.com/GiadaLalli/ISN-tractor/commit/9f840a9ade61247dbbd7e2368c18d607d4ff0e44"
        },
        "date": 1720015157166,
        "tool": "pytest",
        "benches": [
          {
            "name": "test/test_benchmark.py::test_regression_biweight_max",
            "value": 2.3535848592244193,
            "unit": "iter/sec",
            "range": "stddev: 0.011177292273248998",
            "extra": "mean: 424.88376659999915 msec\nrounds: 20"
          },
          {
            "name": "test/test_benchmark.py::test_regression_biweight_avg",
            "value": 2.2330451268519935,
            "unit": "iter/sec",
            "range": "stddev: 0.010151863870796762",
            "extra": "mean: 447.818984029999 msec\nrounds: 20"
          },
          {
            "name": "test/test_benchmark.py::test_regression_biweight_none",
            "value": 1.87037316083966,
            "unit": "iter/sec",
            "range": "stddev: 0.00897994017372864",
            "extra": "mean: 534.6526676800011 msec\nrounds: 20"
          },
          {
            "name": "test/test_benchmark.py::test_regression_pearson_max",
            "value": 2.326630025898117,
            "unit": "iter/sec",
            "range": "stddev: 0.008005664119222367",
            "extra": "mean: 429.80619560000036 msec\nrounds: 20"
          },
          {
            "name": "test/test_benchmark.py::test_regression_pearson_avg",
            "value": 2.274876410359113,
            "unit": "iter/sec",
            "range": "stddev: 0.006020490711195479",
            "extra": "mean: 439.584320030001 msec\nrounds: 20"
          },
          {
            "name": "test/test_benchmark.py::test_regression_pearson_none",
            "value": 2.32076117697488,
            "unit": "iter/sec",
            "range": "stddev: 0.012479098114974807",
            "extra": "mean: 430.8931095199995 msec\nrounds: 20"
          },
          {
            "name": "test/test_benchmark.py::test_regression_spearman_max",
            "value": 1.3164258123567698,
            "unit": "iter/sec",
            "range": "stddev: 0.018710678139777476",
            "extra": "mean: 759.6326284500003 msec\nrounds: 20"
          },
          {
            "name": "test/test_benchmark.py::test_regression_spearman_avg",
            "value": 1.2902365371844902,
            "unit": "iter/sec",
            "range": "stddev: 0.016686609802659094",
            "extra": "mean: 775.0516832999983 msec\nrounds: 20"
          },
          {
            "name": "test/test_benchmark.py::test_regression_spearman_none",
            "value": 1.306461279432989,
            "unit": "iter/sec",
            "range": "stddev: 0.01936214463384477",
            "extra": "mean: 765.4264353200006 msec\nrounds: 20"
          },
          {
            "name": "test/test_benchmark.py::test_regression_dot_max",
            "value": 3.3768871553921787,
            "unit": "iter/sec",
            "range": "stddev: 0.01373885788943786",
            "extra": "mean: 296.13071269000216 msec\nrounds: 20"
          },
          {
            "name": "test/test_benchmark.py::test_regression_dot_avg",
            "value": 3.173535970471738,
            "unit": "iter/sec",
            "range": "stddev: 0.011650823285466422",
            "extra": "mean: 315.10592893999956 msec\nrounds: 20"
          },
          {
            "name": "test/test_benchmark.py::test_regression_dot_none",
            "value": 3.405611334921201,
            "unit": "iter/sec",
            "range": "stddev: 0.012169941952006134",
            "extra": "mean: 293.6330372600014 msec\nrounds: 20"
          },
          {
            "name": "test/test_benchmark.py::test_regression_dense",
            "value": 162.05735126348847,
            "unit": "iter/sec",
            "range": "stddev: 0.0007885596707887205",
            "extra": "mean: 6.170654970005671 msec\nrounds: 20"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "26444312+MaybeJustJames@users.noreply.github.com",
            "name": "James Collier",
            "username": "MaybeJustJames"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "29a2010de5889eeb60a02292eb92ca3538e153f3",
          "message": "Prepare for 0.3.0 release (#47)",
          "timestamp": "2024-07-03T23:55:10+10:00",
          "tree_id": "d927a7e670e5fce863c048b5d1be6d5671349aa2",
          "url": "https://github.com/GiadaLalli/ISN-tractor/commit/29a2010de5889eeb60a02292eb92ca3538e153f3"
        },
        "date": 1720015452101,
        "tool": "pytest",
        "benches": [
          {
            "name": "test/test_benchmark.py::test_regression_biweight_max",
            "value": 3.3135056316316387,
            "unit": "iter/sec",
            "range": "stddev: 0.007320391292800441",
            "extra": "mean: 301.79517138999984 msec\nrounds: 20"
          },
          {
            "name": "test/test_benchmark.py::test_regression_biweight_avg",
            "value": 3.2265354901171164,
            "unit": "iter/sec",
            "range": "stddev: 0.006223936731555036",
            "extra": "mean: 309.92995522999877 msec\nrounds: 20"
          },
          {
            "name": "test/test_benchmark.py::test_regression_biweight_none",
            "value": 2.638845353460127,
            "unit": "iter/sec",
            "range": "stddev: 0.0078057988956529364",
            "extra": "mean: 378.95362026000214 msec\nrounds: 20"
          },
          {
            "name": "test/test_benchmark.py::test_regression_pearson_max",
            "value": 3.4118186026216417,
            "unit": "iter/sec",
            "range": "stddev: 0.00546218445882285",
            "extra": "mean: 293.0988181000009 msec\nrounds: 20"
          },
          {
            "name": "test/test_benchmark.py::test_regression_pearson_avg",
            "value": 3.2957859469184942,
            "unit": "iter/sec",
            "range": "stddev: 0.004948036711398716",
            "extra": "mean: 303.41776319999894 msec\nrounds: 20"
          },
          {
            "name": "test/test_benchmark.py::test_regression_pearson_none",
            "value": 3.3572458931991305,
            "unit": "iter/sec",
            "range": "stddev: 0.012526924804510656",
            "extra": "mean: 297.8631985300001 msec\nrounds: 20"
          },
          {
            "name": "test/test_benchmark.py::test_regression_spearman_max",
            "value": 1.905813425049385,
            "unit": "iter/sec",
            "range": "stddev: 0.009338545966638514",
            "extra": "mean: 524.7103346299951 msec\nrounds: 20"
          },
          {
            "name": "test/test_benchmark.py::test_regression_spearman_avg",
            "value": 1.8444055719083554,
            "unit": "iter/sec",
            "range": "stddev: 0.013249324820125563",
            "extra": "mean: 542.1801014000016 msec\nrounds: 20"
          },
          {
            "name": "test/test_benchmark.py::test_regression_spearman_none",
            "value": 1.8957772748225292,
            "unit": "iter/sec",
            "range": "stddev: 0.013543351939695603",
            "extra": "mean: 527.4881249400005 msec\nrounds: 20"
          },
          {
            "name": "test/test_benchmark.py::test_regression_dot_max",
            "value": 4.752161726731916,
            "unit": "iter/sec",
            "range": "stddev: 0.011724360426213666",
            "extra": "mean: 210.4305487700026 msec\nrounds: 20"
          },
          {
            "name": "test/test_benchmark.py::test_regression_dot_avg",
            "value": 4.352616031326689,
            "unit": "iter/sec",
            "range": "stddev: 0.012943263847938907",
            "extra": "mean: 229.7468907899963 msec\nrounds: 20"
          },
          {
            "name": "test/test_benchmark.py::test_regression_dot_none",
            "value": 4.658749142221515,
            "unit": "iter/sec",
            "range": "stddev: 0.014906940878521856",
            "extra": "mean: 214.6498919499993 msec\nrounds: 20"
          },
          {
            "name": "test/test_benchmark.py::test_regression_dense",
            "value": 153.90648281970982,
            "unit": "iter/sec",
            "range": "stddev: 0.0006832168491410662",
            "extra": "mean: 6.497452099996508 msec\nrounds: 20"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "james.collier@vib.be",
            "name": "James Collier",
            "username": "MaybeJustJames"
          },
          "committer": {
            "email": "james.collier@vib.be",
            "name": "James Collier",
            "username": "MaybeJustJames"
          },
          "distinct": true,
          "id": "4a52a838cd26ca715e9e3208837b9749946b5e75",
          "message": "Try the new way of publishing packages to PyPI",
          "timestamp": "2024-07-03T16:18:52+02:00",
          "tree_id": "31a10898be3b7afb519e852d1996988e32c55f96",
          "url": "https://github.com/GiadaLalli/ISN-tractor/commit/4a52a838cd26ca715e9e3208837b9749946b5e75"
        },
        "date": 1720016996512,
        "tool": "pytest",
        "benches": [
          {
            "name": "test/test_benchmark.py::test_regression_biweight_max",
            "value": 3.1165560269616663,
            "unit": "iter/sec",
            "range": "stddev: 0.004912432523817183",
            "extra": "mean: 320.86700555000164 msec\nrounds: 20"
          },
          {
            "name": "test/test_benchmark.py::test_regression_biweight_avg",
            "value": 3.0018073341033142,
            "unit": "iter/sec",
            "range": "stddev: 0.006873888567210831",
            "extra": "mean: 333.1326393399979 msec\nrounds: 20"
          },
          {
            "name": "test/test_benchmark.py::test_regression_biweight_none",
            "value": 2.4601326860696524,
            "unit": "iter/sec",
            "range": "stddev: 0.009076709325225587",
            "extra": "mean: 406.4821404400004 msec\nrounds: 20"
          },
          {
            "name": "test/test_benchmark.py::test_regression_pearson_max",
            "value": 3.0483838778204535,
            "unit": "iter/sec",
            "range": "stddev: 0.004123774073518433",
            "extra": "mean: 328.04267444000004 msec\nrounds: 20"
          },
          {
            "name": "test/test_benchmark.py::test_regression_pearson_avg",
            "value": 2.9414098532060438,
            "unit": "iter/sec",
            "range": "stddev: 0.0076207817446722805",
            "extra": "mean: 339.97302311 msec\nrounds: 20"
          },
          {
            "name": "test/test_benchmark.py::test_regression_pearson_none",
            "value": 3.1467391373914864,
            "unit": "iter/sec",
            "range": "stddev: 0.006058388661962547",
            "extra": "mean: 317.7892911799984 msec\nrounds: 20"
          },
          {
            "name": "test/test_benchmark.py::test_regression_spearman_max",
            "value": 1.7464877680347302,
            "unit": "iter/sec",
            "range": "stddev: 0.009855219763610852",
            "extra": "mean: 572.5777290300005 msec\nrounds: 20"
          },
          {
            "name": "test/test_benchmark.py::test_regression_spearman_avg",
            "value": 1.703656629865147,
            "unit": "iter/sec",
            "range": "stddev: 0.009021001587896463",
            "extra": "mean: 586.9727399699991 msec\nrounds: 20"
          },
          {
            "name": "test/test_benchmark.py::test_regression_spearman_none",
            "value": 1.7242100788215646,
            "unit": "iter/sec",
            "range": "stddev: 0.014060443167240023",
            "extra": "mean: 579.9757305000003 msec\nrounds: 20"
          },
          {
            "name": "test/test_benchmark.py::test_regression_dot_max",
            "value": 4.557597523446164,
            "unit": "iter/sec",
            "range": "stddev: 0.009676763442357553",
            "extra": "mean: 219.4138457500003 msec\nrounds: 20"
          },
          {
            "name": "test/test_benchmark.py::test_regression_dot_avg",
            "value": 4.178569414093508,
            "unit": "iter/sec",
            "range": "stddev: 0.009980980335597835",
            "extra": "mean: 239.31635469000298 msec\nrounds: 20"
          },
          {
            "name": "test/test_benchmark.py::test_regression_dot_none",
            "value": 4.491475678389915,
            "unit": "iter/sec",
            "range": "stddev: 0.008760334235978842",
            "extra": "mean: 222.6439753000011 msec\nrounds: 20"
          },
          {
            "name": "test/test_benchmark.py::test_regression_dense",
            "value": 172.40225315069853,
            "unit": "iter/sec",
            "range": "stddev: 0.0006587611234419841",
            "extra": "mean: 5.800388229995406 msec\nrounds: 20"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "james.collier@vib.be",
            "name": "James Collier",
            "username": "MaybeJustJames"
          },
          "committer": {
            "email": "james.collier@vib.be",
            "name": "James Collier",
            "username": "MaybeJustJames"
          },
          "distinct": true,
          "id": "c4ff5ee1bea746a69dbc316fa5ad9052c395cc6a",
          "message": "Remove print()s",
          "timestamp": "2024-07-03T16:41:29+02:00",
          "tree_id": "840913c0da15248a4ae1b515989be296cc5375d4",
          "url": "https://github.com/GiadaLalli/ISN-tractor/commit/c4ff5ee1bea746a69dbc316fa5ad9052c395cc6a"
        },
        "date": 1720018258850,
        "tool": "pytest",
        "benches": [
          {
            "name": "test/test_benchmark.py::test_regression_biweight_max",
            "value": 3.339110767966056,
            "unit": "iter/sec",
            "range": "stddev: 0.00925827143563896",
            "extra": "mean: 299.48093055000015 msec\nrounds: 20"
          },
          {
            "name": "test/test_benchmark.py::test_regression_biweight_avg",
            "value": 3.1488091688986217,
            "unit": "iter/sec",
            "range": "stddev: 0.01092321583011237",
            "extra": "mean: 317.5803760599999 msec\nrounds: 20"
          },
          {
            "name": "test/test_benchmark.py::test_regression_biweight_none",
            "value": 2.4086272668698587,
            "unit": "iter/sec",
            "range": "stddev: 0.011149285298047259",
            "extra": "mean: 415.17424208999927 msec\nrounds: 20"
          },
          {
            "name": "test/test_benchmark.py::test_regression_pearson_max",
            "value": 3.2548489963089065,
            "unit": "iter/sec",
            "range": "stddev: 0.007519798804354698",
            "extra": "mean: 307.23391504000006 msec\nrounds: 20"
          },
          {
            "name": "test/test_benchmark.py::test_regression_pearson_avg",
            "value": 3.0936185571601302,
            "unit": "iter/sec",
            "range": "stddev: 0.009430060217032259",
            "extra": "mean: 323.2460568500005 msec\nrounds: 20"
          },
          {
            "name": "test/test_benchmark.py::test_regression_pearson_none",
            "value": 3.2090311581096334,
            "unit": "iter/sec",
            "range": "stddev: 0.014836337786063422",
            "extra": "mean: 311.62053302999936 msec\nrounds: 20"
          },
          {
            "name": "test/test_benchmark.py::test_regression_spearman_max",
            "value": 1.628399947698455,
            "unit": "iter/sec",
            "range": "stddev: 0.013962263829903971",
            "extra": "mean: 614.0997495199986 msec\nrounds: 20"
          },
          {
            "name": "test/test_benchmark.py::test_regression_spearman_avg",
            "value": 1.6231738602397332,
            "unit": "iter/sec",
            "range": "stddev: 0.012557139463678861",
            "extra": "mean: 616.0769493000004 msec\nrounds: 20"
          },
          {
            "name": "test/test_benchmark.py::test_regression_spearman_none",
            "value": 1.6263594927291554,
            "unit": "iter/sec",
            "range": "stddev: 0.02291224259750806",
            "extra": "mean: 614.8702082599976 msec\nrounds: 20"
          },
          {
            "name": "test/test_benchmark.py::test_regression_dot_max",
            "value": 5.537504613670989,
            "unit": "iter/sec",
            "range": "stddev: 0.009361567624250807",
            "extra": "mean: 180.58675698999878 msec\nrounds: 20"
          },
          {
            "name": "test/test_benchmark.py::test_regression_dot_avg",
            "value": 4.980258070497891,
            "unit": "iter/sec",
            "range": "stddev: 0.0077550482423643955",
            "extra": "mean: 200.79280748999963 msec\nrounds: 20"
          },
          {
            "name": "test/test_benchmark.py::test_regression_dot_none",
            "value": 5.850174979748643,
            "unit": "iter/sec",
            "range": "stddev: 0.006686909464815697",
            "extra": "mean: 170.9350580900002 msec\nrounds: 20"
          },
          {
            "name": "test/test_benchmark.py::test_regression_dense",
            "value": 162.7926429328855,
            "unit": "iter/sec",
            "range": "stddev: 0.00041878807877892936",
            "extra": "mean: 6.142783740001505 msec\nrounds: 20"
          }
        ]
      }
    ]
  }
}