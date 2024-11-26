<?php

namespace App\Http\Controllers\Api\v1;

use Illuminate\Http\Request;
use Orion\Http\Controllers\Controller;
use App\Models\Centro;
use Orion\Concerns\DisableAuthorization;

class CommunityLinkController extends Controller
{
    use DisableAuthorization;
    protected $model = Centro::class;
}
