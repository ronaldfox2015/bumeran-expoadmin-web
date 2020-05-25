var Path = {};
Path.base          = __dirname + '/..';
Path.src           = {};
Path.src.base      = Path.base + "/src";
Path.src.app       = Path.src.base + "/app";
Path.src.assets    = Path.src.base + "/assets";

Path.src.styles    = Path.src.assets + "/styles";
Path.src.icons     = Path.src.assets + "/icons";
Path.src.svgicons  = Path.src.assets + "/svgicons";

module.exports = Path;
