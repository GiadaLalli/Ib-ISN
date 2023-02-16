import pytest
from isn_tractor.ibisn import compute_isn as isn

from numpy import array
import pandas as pd
from pandas.testing import assert_frame_equal


def test_empty_inputs():
    snp_data = pd.DataFrame()
    interact_snp = []
    interact_gene = pd.DataFrame()
    assert_frame_equal(
        isn(snp_data, interact_snp, interact_gene, "pearson", "avg"),
        pd.DataFrame(index=pd.RangeIndex(0, 0, 1)),
    )


def test_minimal_pearson_avg():
    snp_data = pd.DataFrame(
        [(1, 0), (1, 2), (2, 1), (0, 0), (1, 2)], columns=["snp_jcstj", "snp_dvxkv"]
    )
    interact_snp = [
        (
            array(["snp_jcstj", "snp_dvxkv"], dtype=object),
            array(["snp_jcstj", "snp_dvxkv"], dtype=object),
        )
    ]
    interact_gene = pd.DataFrame(
        [("gene_vcbc", "gene_pipx")], columns=["gene_id_1", "gene_id_2"]
    )
    assert_frame_equal(
        isn(snp_data, interact_snp, interact_gene, "pearson", "avg"),
        pd.DataFrame(
            [
                (0.531081,),
                (0.531081,),
                (0.229183,),
                (1.732039,),
                (0.531081,),
            ],
            columns=["gene_vcbc_gene_pipx"],
        ),
    )


def test_minimal_pearson_max():
    snp_data = pd.DataFrame(
        [(1, 0), (1, 2), (2, 1), (0, 0), (1, 2)], columns=["snp_jcstj", "snp_dvxkv"]
    )
    interact_snp = [
        (
            array(["snp_jcstj", "snp_dvxkv"], dtype=object),
            array(["snp_jcstj", "snp_dvxkv"], dtype=object),
        )
    ]
    interact_gene = pd.DataFrame(
        [("gene_vcbc", "gene_pipx")], columns=["gene_id_1", "gene_id_2"]
    )
    assert_frame_equal(
        isn(snp_data, interact_snp, interact_gene, "pearson", "max"),
        pd.DataFrame(
            [
                (1.0,),
                (1.0,),
                (1.0,),
                (1.0,),
                (1.0,),
            ],
            columns=["gene_vcbc_gene_pipx"],
        ),
    )


def test_minimal_spearman_avg():
    snp_data = pd.DataFrame(
        [(1, 0), (1, 2), (2, 1), (0, 0), (1, 2)], columns=["snp_jcstj", "snp_dvxkv"]
    )
    interact_snp = [
        (
            array(["snp_jcstj", "snp_dvxkv"], dtype=object),
            array(["snp_jcstj", "snp_dvxkv"], dtype=object),
        )
    ]
    interact_gene = pd.DataFrame(
        [("gene_vcbc", "gene_pipx")], columns=["gene_id_1", "gene_id_2"]
    )
    assert_frame_equal(
        isn(snp_data, interact_snp, interact_gene, "spearman", "avg"),
        pd.DataFrame(
            [
                (0.717217,),
                (0.383883,),
                (0.229183,),
                (1.928214,),
                (0.383883,),
            ],
            columns=["gene_vcbc_gene_pipx"],
        ),
    )


def test_minimal_spearman_max():
    snp_data = pd.DataFrame(
        [(1, 0), (1, 2), (2, 1), (0, 0), (1, 2)], columns=["snp_jcstj", "snp_dvxkv"]
    )
    interact_snp = [
        (
            array(["snp_jcstj", "snp_dvxkv"], dtype=object),
            array(["snp_jcstj", "snp_dvxkv"], dtype=object),
        )
    ]
    interact_gene = pd.DataFrame(
        [("gene_vcbc", "gene_pipx")], columns=["gene_id_1", "gene_id_2"]
    )
    assert_frame_equal(
        isn(snp_data, interact_snp, interact_gene, "spearman", "max"),
        pd.DataFrame(
            [
                (1.0,),
                (1.0,),
                (1.0,),
                (1.0,),
                (1.0,),
            ],
            columns=["gene_vcbc_gene_pipx"],
        ),
    )


def test_minimal_mutual_info_avg():
    snp_data = pd.DataFrame(
        [(1, 0), (1, 2), (2, 1), (0, 0), (1, 2)], columns=["snp_jcstj", "snp_dvxkv"]
    )
    interact_snp = [
        (
            array(["snp_jcstj", "snp_dvxkv"], dtype=object),
            array(["snp_jcstj", "snp_dvxkv"], dtype=object),
        )
    ]
    interact_gene = pd.DataFrame(
        [("gene_vcbc", "gene_pipx")], columns=["gene_id_1", "gene_id_2"]
    )
    assert_frame_equal(
        isn(snp_data, interact_snp, interact_gene, "mutual_info", "avg"),
        pd.DataFrame(
            [
                (0.178174,),
                (0.844840,),
                (1.490751,),
                (0.77414,),
                (0.844840,),
            ],
            columns=["gene_vcbc_gene_pipx"],
        ),
    )


def test_minimal_mutual_info_max():
    snp_data = pd.DataFrame(
        [(1, 0), (1, 2), (2, 1), (0, 0), (1, 2)], columns=["snp_jcstj", "snp_dvxkv"]
    )
    interact_snp = [
        (
            array(["snp_jcstj", "snp_dvxkv"], dtype=object),
            array(["snp_jcstj", "snp_dvxkv"], dtype=object),
        )
    ]
    interact_gene = pd.DataFrame(
        [("gene_vcbc", "gene_pipx")], columns=["gene_id_1", "gene_id_2"]
    )
    assert_frame_equal(
        isn(snp_data, interact_snp, interact_gene, "mutual_info", "max"),
        pd.DataFrame(
            [
                (1.0,),
                (1.0,),
                (1.0,),
                (1.0,),
                (1.0,),
            ],
            columns=["gene_vcbc_gene_pipx"],
        ),
    )


def test_minimal_dot_avg():
    snp_data = pd.DataFrame(
        [(1, 0), (1, 2), (2, 1), (0, 0), (1, 2)], columns=["snp_jcstj", "snp_dvxkv"]
    )
    interact_snp = [
        (
            array(["snp_jcstj", "snp_dvxkv"], dtype=object),
            array(["snp_jcstj", "snp_dvxkv"], dtype=object),
        )
    ]
    interact_gene = pd.DataFrame(
        [("gene_vcbc", "gene_pipx")], columns=["gene_id_1", "gene_id_2"]
    )
    assert_frame_equal(
        isn(snp_data, interact_snp, interact_gene, "dot", "avg"),
        pd.DataFrame(
            [
                (8.0,),
                (16.0,),
                (16.0,),
                (7.0,),
                (16.0,),
            ],
            columns=["gene_vcbc_gene_pipx"],
        ),
    )


def test_minimal_dot_max():
    snp_data = pd.DataFrame(
        [(1, 0), (1, 2), (2, 1), (0, 0), (1, 2)], columns=["snp_jcstj", "snp_dvxkv"]
    )
    interact_snp = [
        (
            array(["snp_jcstj", "snp_dvxkv"], dtype=object),
            array(["snp_jcstj", "snp_dvxkv"], dtype=object),
        )
    ]
    interact_gene = pd.DataFrame(
        [("gene_vcbc", "gene_pipx")], columns=["gene_id_1", "gene_id_2"]
    )
    assert_frame_equal(
        isn(snp_data, interact_snp, interact_gene, "dot", "max"),
        pd.DataFrame(
            [
                (9.0,),
                (21.0,),
                (13.0,),
                (9.0,),
                (21.0,),
            ],
            columns=["gene_vcbc_gene_pipx"],
        ),
    )


def test_invalid_metric_without_data():
    snp_data = pd.DataFrame()
    interact_snp = []
    interact_gene = pd.DataFrame()

    with pytest.raises(ValueError):
        isn(snp_data, interact_snp, interact_gene, "metric", "avg")


def test_invalid_metric_with_data():
    snp_data = pd.DataFrame(
        [(1, 0), (1, 2), (2, 1), (0, 0), (1, 2)], columns=["snp_jcstj", "snp_dvxkv"]
    )
    interact_snp = [
        (
            array(["snp_jcstj", "snp_dvxkv"], dtype=object),
            array(["snp_jcstj", "snp_dvxkv"], dtype=object),
        )
    ]
    interact_gene = pd.DataFrame(
        [("gene_vcbc", "gene_pipx")], columns=["gene_id_1", "gene_id_2"]
    )

    with pytest.raises(ValueError):
        isn(snp_data, interact_snp, interact_gene, "metric", "avg")


def test_invalid_pool_without_data():
    snp_data = pd.DataFrame()
    interact_snp = []
    interact_gene = pd.DataFrame()

    with pytest.raises(ValueError):
        isn(snp_data, interact_snp, interact_gene, "pearson", "pool")


def test_invalid_pool_with_data():
    snp_data = pd.DataFrame(
        [(1, 0), (1, 2), (2, 1), (0, 0), (1, 2)], columns=["snp_jcstj", "snp_dvxkv"]
    )
    interact_snp = [
        (
            array(["snp_jcstj", "snp_dvxkv"], dtype=object),
            array(["snp_jcstj", "snp_dvxkv"], dtype=object),
        )
    ]
    interact_gene = pd.DataFrame(
        [("gene_vcbc", "gene_pipx")], columns=["gene_id_1", "gene_id_2"]
    )

    with pytest.raises(ValueError):
        isn(snp_data, interact_snp, interact_gene, "pearson", "pool")