<?php

namespace App\Http\Controllers\Api\v1;

use Illuminate\Http\Request;
use Orion\Http\Controllers\Controller;
use App\Models\Centro;

class CommunityLinkController extends Controller
{
    protected $model = Centro::class;
}
