from pathlib import Path
import sys

sys.path.insert(0, str(Path(__file__).resolve().parents[1]))

from src.main import main


def test_main_prints_hello_world(capsys) -> None:
    main()
    captured = capsys.readouterr()
    assert captured.out == "Hello, world!\n"
